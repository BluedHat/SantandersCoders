package com.letscode.temperature.converter;

public class Formulas {
    public static double ToFarenheit(double Celsius) {
        return (float) ((Celsius * 1.8) + 32);
    }

    public static double ToKelvin(double Celsius) {
        return (float) (Celsius + 273.15);
    }

    public static double ToReamur(double Celsius) {
        return (float) Celsius * 8;
    }

    public static double toRankine(double Celsius) {
        return (float) ((Celsius * 1.8) + 491);
    }

}
