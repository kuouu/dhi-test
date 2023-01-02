import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Page5 = () => {
  const navigate = useNavigate();

  function handleNavigate72() {
    navigate("/one3");
  }
  function handleNavigate73() {
    navigate("/macone1");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1011px] sm:mb-[3px] md:mb-[5px] mb-[6px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
            <Img
              src="images/img_websiteicon.png"
              className="sm:h-[43px] md:h-[56px] h-[64px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[64px]"
              alt="WebsiteIcon"
            />
            <Column className="flex flex-col items-center md:ml-[6px] ml-[8px] sm:mx-[0] md:p-[6px] p-[8px] sm:px-[0] sm:py-[5px] sm:w-[100%] w-[83%]">
              <Text
                className="mt-[10px] sm:mt-[6px] md:mt-[8px] text-light_blue_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                健保卡網路服務註冊
              </Text>
            </Column>
          </Row>
          <Text
            className="sm:ml-[217px] md:ml-[280px] ml-[326px] sm:mt-[22px] md:mt-[29px] mt-[34px] text-indigo_800 w-[auto]"
            as="h4"
            variant="h4"
          >
            註冊健保卡網路服務系統
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between md:ml-[12px] ml-[15px] sm:mt-[23px] md:mt-[30px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
            <Column className="flex flex-col items-center justify-start mb-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
              <Column className="bg-blue_50 flex flex-col justify-end sm:p-[15px] md:p-[34px] p-[40px] rounded-radius8 w-[100%]">
                <Text
                  className="font-bold sm:mt-[3px] md:mt-[4px] mt-[5px] text-black_900 w-[auto]"
                  variant="body1"
                >
                  全民健康保險網路服務註冊管理作業要點
                </Text>
                <Column className="flex flex-col items-end justify-start sm:mt-[15px] md:mt-[20px] mt-[24px] sm:px-[0] w-[100%]">
                  <Text
                    className="leading-[30.00px] md:leading-[normal] sm:leading-[normal] text-bluegray_900 w-[100%]"
                    variant="body4"
                  >
                    一、為提升行政效率，加強便民服務，全民健康保險保險人（以下稱保險人）提供使用者申辦保險人提供之健保業務及其他網路服務（以下稱本服務），特訂定　　本要點。
                    <br />
                    二、本要點用詞定義如下：
                    <br />
                    <br />
                    　（一）使用者：係指註冊申請本服務之投保單位、保險對象、扣費義務人及經委託代辦本保險相關事宜之代理人，經保險人核准使用者。
                    <br />
                    <br />
                    　（二）基本資料：係指可供保險人比對並得以識別使用者身分之資料。
                    <br />
                    <br />
                    　（三）註冊：係指使用者申請以帳號、密碼或保險人認可具有身分查證功能之載具，透過網路或於保險人指定之處所申請使用本服務之程序。
                    <br />
                    <br />
                    三、保險人於全球資訊網建置網路服務區，供使用者申請以載具、帳號、密碼註冊並同意遵守本要點及填寫基本資料後，以電子資料傳送，即可完成申請作業。
                    <br />
                    <br />
                    四、保險人審核使用者申請之基本資料，以電子郵件通知申請結果，經使用者點選確認信，始完成註冊程序。但透過下列管道申請者，得免透過電子郵件確認：
                    <br />
                    <br />
                    　（一）保險人指定之處所。
                    <br />
                    <br />
                    　（二）保險人開發之行動應用程式（APP）。
                    <br />
                    <br />
                    五、保險人得提供行政機關（構）本服務身分查證機制，供完成註冊之使用者申辦其他網路服務。
                    <br />
                    <br />
                    六、使用者使用本服務應自行安裝所需之電腦軟體、硬體，以及其他與安全相關之設備，應自負注意義務；安裝產生之費用及風險，由使用者自行負擔。
                    <br />
                    <br />
                    七、本服務提供使用者以電子資料傳輸方式申辦健保業務及其他網路服務，使用者於各項服務及功能頁面點選同意或確認等功能鍵時，即視為正式意思表示，免　　送書面申請表。
                    <br />
                    <br />
                    八、使用者註冊時提供不完整、錯誤或不實資料，或註冊後未及時更新基本資料，保險人有權暫停或終止使用者帳號，並拒絕提供全部或部分服務。
                    <br />
                    <br />
                    九、使用者應妥善保管載具、帳號、密碼並僅限使用者或經使用者授權代辦本保險相關事宜之代理人使用，不得出租、出借、移轉或讓與其他人。如有上開出　　租、出借、移轉或讓與等情事者，保險人有權暫停或終止使用者帳號，並拒絕提供全部或部分服務。
                    <br />
                    <br />
                    十、使用者於使用本服務忘記密碼或輸入密碼連續錯誤時，保險人得停止其使用本服務；使用者應依保險人規定之程序辦理，始得恢復使用。
                    <br />
                    <br />
                    十一、使用者發現有第三人冒用或盜用其載具、帳號、密碼等情事，應立即通知保險人停止使用本服務，使用者未通知保險人造成之損害，由使用者自行負擔。
                    <br />
                    <br />
                    十二、使用者透過網路申請註冊或使用本服務，應於保險人於全球資訊網站公告之服務時間為之。保險人因相關系統設備進行遷移、維護或其他因素，造成本服　　　務之暫停或中斷，使用者得至保險人之辦公處所申辦或待系統恢復服務後再度使用。
                    <br />
                    <br />
                    十三、保險人提供之服務項目於使用者註冊完成後如有變動，使用者無需另行註冊，即可申辦該變動後之服務項目。使用者申辦前項之服務項目時，即視為同意　　　依該服務項目之相關規定辦理。
                    <br />
                    <br />
                    十四、保險人應保存使用者註冊之紀錄，對於使用者登錄資料應負保密之責，並禁止為公務以外之目的使用。
                    <br />
                    <br />
                    十五、保險人對於認可之載具種類及提供行政機關（構）本服務身分查驗機制，供完成註冊之使用者申辦其他網路服務等資訊，應同步公布於全球資訊網站。
                  </Text>
                  <Text
                    className="leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[15px] md:mt-[20px] mt-[24px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[51%]"
                    variant="body4"
                  >
                    103 年8 月19 日健保承字第1030080065 號令發布，自103 年10 月1
                    日生效
                    <br />
                    <br />
                    104 年9 月18 日健保承字第1040080077
                    號令修正發布，自104年10月1日生效
                    <br />
                    <br />
                    107 年8 月 6 日健保承字第1070030482
                    號令修正發布，自107年8月15日生效
                  </Text>
                </Column>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate72}
                >
                  上一步
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate73}
                >
                  已閱讀完畢
                </Button>
              </Row>
            </Column>
            <Img
              src="images/img_question.svg"
              className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] md:mt-[1044px] mt-[1214px] sm:mt-[808px] sm:w-[23px] md:w-[30px] w-[35px]"
              alt="question"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page5;
