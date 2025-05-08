use actix_web::{get, HttpResponse, Responder};
use serde::Serialize;

#[derive(Debug, Serialize)]
struct HealthStatus {
    status: &'static str,
    version: &'static str,
}

#[get("/health")]
pub async fn health_check() -> impl Responder {
    let status = HealthStatus {
        status: "ok",
        version: env!("CARGO_PKG_VERSION"),
    };
    
    HttpResponse::Ok().json(status)
}