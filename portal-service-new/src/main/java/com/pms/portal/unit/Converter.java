package com.pms.portal.unit;

import org.springframework.security.crypto.bcrypt.BCrypt;

public class Converter {

    private static final int WORKLOAD = 12;

    private Converter() {
    }

    public static String hashPassword(String pwPlainText) {
        String salt = BCrypt.gensalt(WORKLOAD);
        return BCrypt.hashpw(pwPlainText, salt);

    }

    public static boolean checkPassword(String pwPlainText, String storedHash) {

        if (null == storedHash || !storedHash.startsWith("$2a$")) {
            throw new java.lang.IllegalArgumentException("Invalid hash provided for comparison");
        }

        return BCrypt.checkpw(pwPlainText, storedHash);

    }

}
