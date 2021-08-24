package app.btyd.repository;

import app.btyd.entity.NodeEntity;
import org.springframework.jdbc.core.DataClassRowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

import static app.btyd.util.EntityUtils.slim;

@Repository
public class NodeRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public NodeRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<NodeEntity> selectNodeList() {
        var sql = """
                SELECT id, code, name
                FROM t_node;
                """;
        var rowMapper = new DataClassRowMapper<>(NodeEntity.class);
        return this.jdbcTemplate.query(slim(sql), rowMapper);
    }
}
