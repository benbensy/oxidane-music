use std::io;
use actix_web::{web, App, HttpServer};
use actix_cors::Cors;
use tauri::AppHandle;

pub mod example;
pub mod health;

#[allow(dead_code)]
#[derive(Clone)]
pub struct AppState {
    pub tauri: AppHandle,
}

#[actix_web::main]
pub async fn init(tauri: AppHandle) -> io::Result<()> {
    let app_data = web::Data::new(AppState { tauri });

    let server = HttpServer::new(move || {
        let cors = Cors::default()
        .allow_any_origin()
        .allow_any_method()
        .allow_any_header()
        .max_age(3600);
        App::new()
            .wrap(cors)
            .app_data(app_data.clone())
            .service(example::example)
            .service(health::health_check)
    })
    .bind(("127.0.0.1", 45141))?
    .run();

    println!("🚀 HTTP server running at http://127.0.0.1:45141");
    
    server.await
}