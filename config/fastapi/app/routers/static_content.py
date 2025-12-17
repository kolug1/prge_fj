from fastapi import APIRouter


router = APIRouter()


@router.get("/aa")
async def aa():
    return [
        {"Imię": "Adrian"},
        {"Imię": "Mateusz"},
        {"Imię": "Bassam"},
    ]