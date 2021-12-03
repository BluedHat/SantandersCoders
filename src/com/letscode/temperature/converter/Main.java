package com.letscode.temperature.converter;

import java.util.Scanner;
import static com.letscode.temperature.converter.Formulas.*;

public class Main {

    public static void main(String[] args) {

        System.out.println("Digite o valor em Celsius");

        Scanner Celsius = new Scanner(System.in);
        double EntryTemp = Celsius.nextDouble();

        System.out.println("Conversor de Medidas");
        System.out.println("Escolha abaixo um sistema");
        System.out.println("1 - Para Celsius to Farenheit digite 1");
        System.out.println("2 - Para Celsius to Kelvin digite 2");
        System.out.println("3 - Para Celsius to Riamer digite 3");
        System.out.println("4 - Para Celsius to Rankine digite 4");

        Scanner UserOption = new Scanner(System.in);
        String DesiredOption = String.valueOf(UserOption.nextInt());

        switch (DesiredOption) {
            case "1":
                System.out.println(ToFarenheit(EntryTemp));
                break;
            case "2":
                System.out.println(ToKelvin(EntryTemp));
                break;
            case "3":
                System.out.println(ToReamur(EntryTemp));
                break;
            case "4":
                System.out.println(toRankine(EntryTemp));
                break;
            default:
                System.out.println("Resposta inválida");
                break;
        }
    }
}


