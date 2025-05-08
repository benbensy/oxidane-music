use actix_web::{post, web, HttpResponse, Responder};
use serde::{Deserialize, Serialize};

use crate::services::AppState;

#[derive(Debug, Serialize, Deserialize)]
pub struct ExampleRequest {
    pub name: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ExampleResponse {
    pub message: String,
    pub data: Option<serde_json::Value>,
}

#[post("/example")]
pub async fn example(
    _data: web::Data<AppState>,
    payload: web::Json<ExampleRequest>,
) -> impl Responder {
    println!("Received request with name: {}", payload.name);

    if payload.name.trim().is_empty() {
        return HttpResponse::BadRequest().json(serde_json::json!({
            "error": "Name cannot be empty"
        }));
    }

    let response = ExampleResponse {
        message: format!("Hello, {}!", payload.name),
        data: None,
    };
    
    HttpResponse::Ok().json(response)
}