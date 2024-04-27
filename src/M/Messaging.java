package M;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Arrays;
import java.util.Scanner;

import com.google.auth.oauth2.AccessToken;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

import websquare.logging.util.LogUtil;

/**
 * Firebase Cloud Messaging (FCM) can be used to send messages to clients on iOS, Android and Web.
 *
 * This sample uses FCM to send two types of messages to clients that are subscribed to the `news`
 * topic. One type of message is a simple notification message (display message). The other is
 * a notification message (display notification) with platform specific customizations, for example,
 * a badge is added to messages that are sent to iOS devices.
 * 
 * 
 * 
 * {
  "type": "service_account",
  -> "project_id": "teammocaandroid",
  "private_key_id": "0ae7728a30f21141c5fcbcec739a718298e60cf7",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGiXfkcLA3xFv6\nZEOeeENwxFzfVnKI8a0ivsvEGcuyZHgCtve9kFxkTu/qqm4I29fR8P/i5A3Y9mcS\n6ROaImtvrNOpRwLS9/aIK2LExBXumBHG9lJvHE0KqEEqbafCC0Y4dkQzqR+4guu0\nQNcTXtXcFQISM31s97zRy0Bc627Ud8xledwNSGGgh7mcTDf23kb/MMdlyMpwSIuL\nsfGGKcxBrAQQJsSNGx67RdfxF+Ao5w+BGZhKz6WgF6eYuz2xluxx5OPiPtp0di7s\nFB1GhlAjAG3G7UEsPDYSrlbY7ZEqMWyAMpH+S61RWniW2tMzn8JeEx4Gsn4keU2Z\n+in0FOWpAgMBAAECggEAN02Qo4YOWCJu2pM2ULzAUHeqRR4P/nyPlVefbAshdhpN\nYbg0z02YpupkIzKBPx96AUWICdwrzU1pzdc1+h/vXGbAeO1KaJjgx/KJ6zSRxWn/\nvbPcp42zGi5fJKHx8nfwggbTna5VIzD41jefkYo/uTPy5T4JiKKDqs7aqWd9clpE\n6s86mbriioRNtH0r7MxTHCQIo9HXKgQ/ztHiL0TOSHI/+SS4sKouzU9DAPf9EPlr\n6jLq4gwXM/SFJ/TVUj1jhCrbLBSYOGw7g+MRSB1Opm938eVlGOnRtBZxBqmYuLgV\nyzoyxbzToEeI0jtZ9s8Wy0zWJBpgsCGp8ZRU7lhf3wKBgQDlxpzLdhS/lvs5CBYf\ncg10OMkqKCtV7RwQwrYssrGz9u9YSWHDqiHdU5shoPILpx6dYp2XZk4Dy3jRCA4P\nmPnlJ/lvut4tL7Y2mO/zQ/UZ0ZI3r2N0eycELFOIQ5UU/r25s0eKbu1ltmU1HFlS\nWpAdycPYveWlis6OBmJD5I1EkwKBgQDdMiWYCoAawdRal9S9uek0M5SDMdfHGMuR\nZYAa/w2jI4qxjGjNrr8CvhVwKK/KIV3pzh60yEcxr8V90BUYSgHPNZS3NN07wfwG\nbi8M/IzP7KwgEglTjiUuALAtrhhGSc0BPBRybKxuyNi9Mihs5c6zPC+rlZHcTWBB\nlsXTDL3uUwKBgDXFsiHnQ1nG0on5O3wma8GcHG+yMNoOADhn6MwzEWUlT8PggHGS\n2hP6od5P1PUnKgH49xpcRbubnW2Frgy2ZxzaqwQbvizi8oh6aAUNDUn6gnZnpCW5\nQFs4qF/GORhNuUbBDuf1p7ba5Xp1ZO3h5cIi2qNZZWnFPyt7kPmEfg7jAoGANfjB\ncYrGXUEERqKbdzvAqksXprdnth3Xtf91NaEcO701X0MqY12LH+kvo/FZi1F+78iq\nd2QS8w23e45lR0rvjBa/1cAhZy5bB1qlQl7xIN7X1O9xtSCO892ZH1xGcggZ7H4z\nYwQfQtzg/bEaag/c0qER5KUXNRDwNrDKTkfipB8CgYEA4mYWlqvsDuyapGGZfqYP\nZFNUnsRzX4MShWKAEifhueg8ULlXozfZP/KkUdTtEc5HEMSeQ9PyB9i3T0RpQJ0K\nu/OjDT2DDllmj0reKkRJFyVpEGgh1A5AIQvJzqLnBfkA5IcNF05V0ML3tKdPyy2s\n/ZwcgkdCYgDl2ALnK9iYEcI=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-5s6a9@teammocaandroid.iam.gserviceaccount.com",
  "client_id": "106091887270782855665",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5s6a9%40teammocaandroid.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
 */
public class Messaging {

  private static final String PROJECT_ID = "teammocaandroid";
  private static final String BASE_URL = "https://fcm.googleapis.com";
  private static final String FCM_SEND_ENDPOINT = "/v1/projects/" + PROJECT_ID + "/messages:send";

  private static final String MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
  private static final String[] SCOPES = { MESSAGING_SCOPE };

  private static final String TITLE = "FCM Notification";
  private static final String BODY = "Notification from FCM";
  public static final String MESSAGE_KEY = "message";

  /**
   * Retrieve a valid access token that can be use to authorize requests to the FCM REST
   * API.
   *
   * @return Access token.
   * @throws IOException
   */
  // [START retrieve_access_token]
  private static String getAccessToken() throws IOException {
	  String GOOGLE_APPLICATION_CREDENTIALS =   System.getProperty("GOOGLE_APPLICATION_CREDENTIALS");
      try {
		    GoogleCredentials googleCredentials = GoogleCredentials
		            .fromStream(new FileInputStream(GOOGLE_APPLICATION_CREDENTIALS))
		            .createScoped(Arrays.asList(SCOPES));
		    /*
          FirebaseOptions options = FirebaseOptions.builder()
                  .setCredentials(googleCredentials)
                  .build();

          FirebaseApp.initializeApp(options);
						LogUtil.info("파이어베이스 서버와의 연결에 성공했습니다.");
			*/
			LogUtil.info("==============GOOGLE_APPLICATION_CREDENTIALS=>"+GOOGLE_APPLICATION_CREDENTIALS);
;
			AccessToken at = googleCredentials.refreshAccessToken();
		    LogUtil.info("==============at=>"+at);
		    String v = at.getTokenValue();
		    LogUtil.info("==============at=>"+v);
		    
		    LogUtil.info("==============googleCredentials=>"+googleCredentials);
		    LogUtil.info("==============googleCredentials.getAccessToken()=>"+googleCredentials.getAccessToken());
		    return v;	  
		  
	  }catch(Exception e) {
		  e.printStackTrace();
		return "";  
	  }
	  
  }
  // [END retrieve_access_token]

  /**
   * Create HttpURLConnection that can be used for both retrieving and publishing.
   *
   * @return Base HttpURLConnection.
   * @throws IOException
   */
  private static HttpURLConnection getConnection() throws IOException {
    // [START use_access_token]
    URL url = new URL(BASE_URL + FCM_SEND_ENDPOINT);
    HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
    String Authorization = "Bearer " + getAccessToken();
    LogUtil.info("==============Authorization=>"+Authorization);
    httpURLConnection.setRequestProperty("Authorization", Authorization);
    httpURLConnection.setRequestProperty("Content-Type", "application/json; UTF-8");
    return httpURLConnection;
    // [END use_access_token]
  }

  /**
   * Send request to FCM message using HTTP.
   * Encoded with UTF-8 and support special characters.
   *
   * @param fcmMessage Body of the HTTP request.
   * @throws IOException
   */
  private static void sendMessage(JsonObject fcmMessage) throws IOException {

	    
	    
	    
    HttpURLConnection connection = getConnection();
    connection.setDoOutput(true);
    OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream(), "UTF-8");
    writer.write(fcmMessage.toString());
    writer.flush();
    writer.close();

    int responseCode = connection.getResponseCode();
    if (responseCode == 200) {
      String response = inputstreamToString(connection.getInputStream());
      System.out.println("Message sent to Firebase for delivery, response:");
      System.out.println(response);
    } else {
      System.out.println("Unable to send message to Firebase:");
      String response = inputstreamToString(connection.getErrorStream());
      System.out.println(response);
    }
  }

  /**
   * Send a message that uses the common FCM fields to send a notification message to all
   * platforms. Also platform specific overrides are used to customize how the message is
   * received on Android and iOS.
   *
   * @throws IOException
   */
  private static void sendOverrideMessage() throws IOException {
    JsonObject overrideMessage = buildOverrideMessage();
    System.out.println("FCM request body for override message:");
    prettyPrint(overrideMessage);
    sendMessage(overrideMessage);
  }

  /**
   * Build the body of an FCM request. This body defines the common notification object
   * as well as platform specific customizations using the android and apns objects.
   *
   * @return JSON representation of the FCM request body.
   */
  private static JsonObject buildOverrideMessage() {
    JsonObject jNotificationMessage = buildNotificationMessage();

    JsonObject messagePayload = jNotificationMessage.get(MESSAGE_KEY).getAsJsonObject();
    messagePayload.add("android", buildAndroidOverridePayload());

    JsonObject apnsPayload = new JsonObject();
    apnsPayload.add("headers", buildApnsHeadersOverridePayload());
    apnsPayload.add("payload", buildApsOverridePayload());

    messagePayload.add("apns", apnsPayload);

    jNotificationMessage.add(MESSAGE_KEY, messagePayload);

    return jNotificationMessage;
  }

  /**
   * Build the android payload that will customize how a message is received on Android.
   *
   * @return android payload of an FCM request.
   */
  private static JsonObject buildAndroidOverridePayload() {
    JsonObject androidNotification = new JsonObject();
    androidNotification.addProperty("click_action", "android.intent.action.MAIN");

    JsonObject androidNotificationPayload = new JsonObject();
    androidNotificationPayload.add("notification", androidNotification);

    return androidNotificationPayload;
  }

  /**
   * Build the apns payload that will customize how a message is received on iOS.
   *
   * @return apns payload of an FCM request.
   */
  private static JsonObject buildApnsHeadersOverridePayload() {
    JsonObject apnsHeaders = new JsonObject();
    apnsHeaders.addProperty("apns-priority", "10");

    return apnsHeaders;
  }

  /**
   * Build aps payload that will add a badge field to the message being sent to
   * iOS devices.
   *
   * @return JSON object with aps payload defined.
   */
  private static JsonObject buildApsOverridePayload() {
    JsonObject badgePayload = new JsonObject();
    badgePayload.addProperty("badge", 1);

    JsonObject apsPayload = new JsonObject();
    apsPayload.add("aps", badgePayload);

    return apsPayload;
  }

  /**
   * Send notification message to FCM for delivery to registered devices.
   *
   * @throws IOException
   */
  public static void sendCommonMessage() throws IOException {
    JsonObject notificationMessage = buildNotificationMessage();
    LogUtil.info("FCM request body for message using common notification object:");
    prettyPrint(notificationMessage);
    sendMessage(notificationMessage);
  }

  /**
   * Construct the body of a notification message request.
   *
   * @return JSON of notification message.
   */
  private static JsonObject buildNotificationMessage() {
    JsonObject jNotification = new JsonObject();
    jNotification.addProperty("title", TITLE);
    jNotification.addProperty("body", BODY);
    

    JsonObject jMessage = new JsonObject();
    jMessage.add("notification", jNotification);
    
    jMessage.addProperty("token", "eQEOxlKJSeqKCdaISt_cpN:APA91bFNU-rqaROVrX5tUSkhveYTAtOys-A_eKOPD4AvH0kVzASoxwg-bFqElStoejXffWOrPPjrtaZeHjin6TY2r2O5gt0UUeOkkVJ4CV0NVbMwPh_iOxollsjBs9ziilZLPMKovUvR");
    JsonObject jFcm = new JsonObject();
    jFcm.add(MESSAGE_KEY, jMessage);

    return jFcm;
  }

  /**
   * Read contents of InputStream into String.
   *
   * @param inputStream InputStream to read.
   * @return String containing contents of InputStream.
   * @throws IOException
   */
  private static String inputstreamToString(InputStream inputStream) throws IOException {
    StringBuilder stringBuilder = new StringBuilder();
    Scanner scanner = new Scanner(inputStream);
    while (scanner.hasNext()) {
      stringBuilder.append(scanner.nextLine());
    }
    return stringBuilder.toString();
  }

  /**
   * Pretty print a JsonObject.
   *
   * @param jsonObject JsonObject to pretty print.
   */
  private static void prettyPrint(JsonObject jsonObject) {
    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    System.out.println(gson.toJson(jsonObject) + "\n");
  }

  public static void main(String[] args) throws IOException {
    if (args.length == 1 && args[0].equals("common-message")) {
      sendCommonMessage();
    } else if (args.length == 1 && args[0].equals("override-message")) {
      sendOverrideMessage();
    } else {
      System.err.println("Invalid command. Please use one of the following commands:");
      // To send a simple notification message that is sent to all platforms using the common
      // fields.
      System.err.println("./gradlew run -Pmessage=common-message");
      // To send a simple notification message to all platforms using the common fields as well as
      // applying platform specific overrides.
      System.err.println("./gradlew run -Pmessage=override-message");
    }
  }

}
