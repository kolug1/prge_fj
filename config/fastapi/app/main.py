from fastapi import FastAPI
from app.routers.static_content import router
from app.routers.db_insert import router_insert
app = FastAPI(title="MapBook API")

app.include_router(router, prefix="/app")
app.include_router(router_insert, prefix="/app")
