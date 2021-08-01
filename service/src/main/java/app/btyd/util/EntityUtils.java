package app.btyd.util;

import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

public abstract class EntityUtils {

    private static final Pattern SLIM_PATTERN = Pattern.compile("\\s+");

    /**
     * @param sql SQL
     * @return slimmed SQL
     */
    public static @NotNull String slim(@NotNull String sql) {
        return SLIM_PATTERN.matcher(sql).replaceAll(" ").trim();
    }
}
