def create_category(id, category_data):
    with sqlite3.connect("./XXX.db") as conn:
        db_cursor = conn.cursor()

        db_cursor.execute(
            """
            INSERT INTO Category (label, category_id)
            VALUES (?, ?)
            """,
            (category_data["label"], category_data["category_id"]),
        )

        new_category_id = db_cursor.lastrowid

    return new_category_id