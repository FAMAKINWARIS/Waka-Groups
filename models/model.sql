CREATE TABLE
    IF NOT EXISTS inventory_record (
        id SERIAL PRIMARY KEY,
        item_name VARCHAR(50),
        item_description VARCHAR,
        item_category VARCHAR,
        item_amount INTEGER
    )