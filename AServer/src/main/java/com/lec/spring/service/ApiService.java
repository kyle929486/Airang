package com.lec.spring.service;

import com.lec.spring.domain.Daycare;
import com.lec.spring.repository.DaycareRepository;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

@Service
@RequiredArgsConstructor
@Transactional
public class ApiService {

    @Autowired
    private final DaycareRepository daycareRepository;

    @Value("${custom.api.key}")
    private String apiKey;

    public void daycareLoad(@RequestParam String startPage, @RequestParam String endPage) throws IOException, ParseException {

        // 1. URL을 만들기 위한 StringBuilder.
        StringBuilder urlBuilder = new StringBuilder("http://openapi.seoul.go.kr:8088"); /*URL*/

        // 2. 오픈 API의 요청 규격에 맞는 파라미터 생성, 발급받은 인증키.
        urlBuilder.append("/" + URLEncoder.encode(apiKey, "UTF-8")); /*인증키*/
        urlBuilder.append("/" + URLEncoder.encode("json", "UTF-8")); /*요청파일타입 (xml,xmlf,xls,json) */
        urlBuilder.append("/" + URLEncoder.encode("ChildCareInfo", "UTF-8")); /*서비스명*/
        urlBuilder.append("/" + URLEncoder.encode(startPage, "UTF-8")); /*요청시작위치*/
        urlBuilder.append("/" + URLEncoder.encode(endPage, "UTF-8")); /*요청종료위치*/
        // 상위 5개는 필수적으로 순서 바꾸지 않고 호출해야 합니다.

        // 3. URL 객체 생성.
        URL url = new URL(urlBuilder.toString());

        // 4. 요청하고자 하는 URL과 통신하기 위한 Connection 객체 생성.
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        // 5. 통신을 위한 메소드 SET.
        conn.setRequestMethod("GET");

        // 6. 통신을 위한 Content-type SET.
        conn.setRequestProperty("Content-type", "application/json");

        // 7. 통신 응답 코드 확인.
        System.out.println("Response code: " + conn.getResponseCode()); /* 연결 자체에 대한 확인이 필요하므로 추가합니다.*/

        // 8. 전달받은 데이터를 BufferedReader 객체로 저장.
        BufferedReader rd;
        // 서비스코드가 정상이면 200~300사이의 숫자가 나옵니다.
        if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }

        // 9. 저장된 데이터를 라인별로 읽어 StringBuilder 객체로 저장.
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }

        // 10. 객체 해제.
        rd.close();
        conn.disconnect();

//        // 11. 전달받은 데이터 확인.
//        System.out.println(sb.toString());

        // 12. 문자열 형태의 JSON을 파싱하기 위한 JSONParser 객체 생성.
        JSONParser parser = new JSONParser();

        // 13. 문자열을 JSON 형태로 JSONObject 객체에 저장.
        JSONObject obj = (JSONObject) parser.parse(String.valueOf(sb));

        // 14. 필요한 리스트 데이터 부분만 가져와 JSONArray로 저장.
        JSONObject childCareInfo = (JSONObject) obj.get("ChildCareInfo");
        JSONArray dataArr = (JSONArray) childCareInfo.get("row");

        // 15. JSONArray의 원소들을 DB에 저장
        for (int i = 0; i < dataArr.size(); i++) {

            JSONObject tmp = (JSONObject) dataArr.get(i);

            Daycare daycare = new Daycare();

            daycare.setCode((String) tmp.get("STCODE"));
            daycare.setSigun((String) tmp.get("SIGUNNAME"));
            daycare.setName((String) tmp.get("CRNAME"));
            daycare.setType((String) tmp.get("CRTYPENAME"));
            daycare.setStatus((String) tmp.get("CRSTATUSNAME"));
            daycare.setAddress((String) tmp.get("CRADDR"));
            daycare.setPhoneNum((String) tmp.get("CRTELNO"));
            daycare.setHomepage((String) tmp.get("CRHOME"));
            daycare.setPlaygroundCnt((String) tmp.get("PLGRDCO"));
            daycare.setCctvCnt((String) tmp.get("CCTVINSTLCNT"));
            daycare.setSchoolBus((String) tmp.get("CRCARGBNAME"));
            daycare.setService((String) tmp.get("CRSPEC"));

            // 만약 존재하는 데이터라면 기존 데이터 update
            if (daycareRepository.existsByCode(daycare.getCode())) {

                Daycare daycareUpdate = daycareRepository.findByCode(daycare.getCode()).orElseThrow();
                daycare.setId(daycareUpdate.getId());
                daycareRepository.save(daycare);

                // 존재하지 않는다면 새로운 데이터 insert
            } else {
                daycareRepository.save(daycare);

            }

        }

    }

}
