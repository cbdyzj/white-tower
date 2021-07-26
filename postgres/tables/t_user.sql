CREATE TABLE IF NOT EXISTS t_user
(
    id               SERIAL PRIMARY KEY,
    username         VARCHAR,
    email            VARCHAR,
    avatar_url       VARCHAR,
    last_active_time TIMESTAMPTZ DEFAULT NOW(),
    creation_time    TIMESTAMPTZ DEFAULT NOW()
);