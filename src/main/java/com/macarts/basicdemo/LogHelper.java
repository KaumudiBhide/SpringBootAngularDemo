package com.macarts.basicdemo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class LogHelper {

    private static final String LINE = "----------------------------------------------------------";
    private static final String ENDS = "|";
    private static final String SPACES = "        ";

    public static void printPrettyLog(String message) {
        log.info(LINE);
        String logBuffer = ENDS + SPACES + message + SPACES;
        log.info(logBuffer);
        log.info(LINE);
    }

    public static void printErrorLog(String message) {
        System.err.println(LINE);
        String logBuffer = ENDS + SPACES + message + SPACES;
        System.err.println(logBuffer);
        System.err.println(LINE);
    }
}
