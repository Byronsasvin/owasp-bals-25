# SOLO PARA PRUEBAS: código intencionalmente vulnerable. No usar en producción.
import os
import pickle
import sqlite3

import requests

API_KEY = "FAKE-API-KEY-FOR-TESTS"  # CWE-798 (valor ficticio)


def get_user(email):
    conn = sqlite3.connect("app.db")
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM users WHERE email = '{email}'")  # CWE-89
    return cur.fetchall()


def ping(host):
    os.system("ping -c 1 " + host)  # CWE-78


def load_session(blob):
    return pickle.loads(blob)  # CWE-502


def fetch(url):
    return requests.get(url, verify=False)  # CWE-295
