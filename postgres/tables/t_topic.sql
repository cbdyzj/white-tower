CREATE TABLE IF NOT EXISTS t_topic
(
    id           SERIAL PRIMARY KEY,
    node_id      INTEGER,
    post_user_id INTEGER,
    title        VARCHAR,
    content      VARCHAR,
    post_time    TIMESTAMPTZ DEFAULT NOW(),
    updated_time TIMESTAMPTZ DEFAULT NOW()
);
