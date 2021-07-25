package app.btyd.util;

import org.jetbrains.annotations.NotNull;

public abstract class EntityUtils {

    /**
     * @param sql SQL
     * @return slimmed SQL
     */
    public static @NotNull String slim(@NotNull String sql) {
        return sql.replaceAll("\\s+", " ").trim();
    }

}
