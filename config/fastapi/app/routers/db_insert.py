from fastapi import APIRouter
from sqlalchemy import create_engine, text
from pydantic import BaseModel

from app.settings import db_name, db_user, db_password

router_insert = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )


class UserData(BaseModel):
    name: str
    posts: int
    location: str

def get_coords_osm(location):
    import requests
    try:
        url:str=f'https://nominatim.openstreetmap.org/search?q={location}&format=json&limit=1'
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/538.36 (KHTML, like Gecko) Chrome/92.0.4472.124 Safari/538.36'
        }
        data=requests.get(url, headers=headers).json()
        latitude=float(data[0]['lat'])
        longitude=float(data[0]['lon'])
        return [latitude, longitude]
    except:
        print("Nie udało sie pobrać współrzędnych")
        return [52.2297, 21.0122]


@router_insert.post("/insert_user")
async def insert_user(user: UserData):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        params = {
            "name": user.name,
            "posts": user.posts,
            "location": user.location,
            "geom": f'SRID=4326;POINT({get_coords_osm(user.location)[1]} {get_coords_osm(user.location)[0]})'
        }

        sql_query = text("""
                         insert into users (name, posts, geom, location)
                         values (:name, :posts, :geom, :location); \
                         """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()
            print(result)


    except Exception as e:
        print(e)
        raise e

    return {"status": 1}