package Objects;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class SumRequest {

    private String num1;
    private String num2;
    private String code;

    public String getCode() {
        return code;
    }

    public void setCode(String operation) {
        this.code = operation;
    }

    public String getNum1() {
        return num1;
    }

    public void setNum1(String num1) {
        this.num1 = num1;
    }

    public String getNum2() {
        return num2;
    }

    public void setNum2(String num2) {
        this.num2 = num2;
    }

    public String getHTMLCode(String urlToRead) throws Exception {
        String httpsURL = urlToRead;
        URL myUrl = new URL(httpsURL);
        HttpURLConnection conn = (HttpURLConnection)myUrl.openConnection();
        InputStream is = conn.getInputStream();
        InputStreamReader isr = new InputStreamReader(is);
        BufferedReader br = new BufferedReader(isr);

        String inputLine;

        while ((inputLine = br.readLine()) != null) {
            System.out.println(inputLine);
        }

        br.close();

        Integer cod = conn.getResponseCode();

        return cod.toString();
    }
}
