package com.macarts.basicdemo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class LogHelper {

    private static final String LINE = "----------------------------------------------------------";
    private static final String ENDS = "|";
    private static final String SPACES = "        ";


    public static void printPrettyLog(String message) {
        log.info(LINE);
        StringBuffer logBuffer = new StringBuffer(ENDS);
        logBuffer.append(SPACES);
        logBuffer.append(message);
        logBuffer.append(SPACES);
        log.info(logBuffer.toString());
        log.info(LINE);
    }
}
