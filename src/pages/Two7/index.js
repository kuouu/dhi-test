import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Two7Page = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/page9");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1011px] sm:mb-[3px] md:mb-[5px] mb-[6px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
              <Img
                src="images/img_websiteicon.png"
                className="sm:h-[43px] md:h-[56px] h-[64px] rounded-radius50 sm:w-[42px] md:w-[55px] w-[64px]"
                alt="WebsiteIcon"
              />
              <Column className="flex flex-col items-center sm:mx-[0] md:p-[6px] p-[8px] sm:px-[0] sm:py-[5px] sm:w-[100%] w-[83%]">
                <Text
                  className="mt-[10px] sm:mt-[6px] md:mt-[8px] text-light_blue_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  健保卡網路服務註冊
                </Text>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[211px] ml-[246px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
              <Button
                className="cursor-pointer font-bold min-w-[46%] text-[14px] text-center text-light_blue_900 w-[max-content]"
                variant="FillBlue100"
              >
                登出
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[46%] text-[14px] text-center text-white_A700 w-[max-content]"
                variant="FillBlue700"
              >
                回首頁
              </Button>
            </Row>
          </Row>
          <Column className="flex flex-col justify-start md:ml-[70px] ml-[82px] sm:mt-[39px] md:mt-[50px] mt-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Column className="bg-blue_50 flex flex-col items-center justify-end sm:mx-[0] sm:p-[15px] md:p-[38px] p-[45px] rounded-radius16 sm:w-[100%] w-[87%]">
              <Column className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                  行動裝置認證
                </Text>
                <Column className="flex flex-col items-center justify-start sm:mt-[43px] md:mt-[55px] mt-[65px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    行動裝置帳號：E125XXXXXX
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                      <Text
                        className="font-bold sm:mt-[3px] md:mt-[4px] mt-[5px] text-red_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        *
                      </Text>
                      <Text
                        className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] ml-[10px] md:ml-[8px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[96%]"
                        variant="body1"
                      >
                        <span className="text-black_900 text-[18px] font-notosanstc">
                          進行裝置認證需先點選「產生裝置認證碼」按鈕，系統將產生{" "}
                        </span>
                        <span className="text-black_900 text-[18px] font-notosanstc font-bold">
                          QR-Code
                        </span>
                        <span className="text-black_900 text-[18px] font-notosanstc">
                          {" "}
                          及{" "}
                        </span>
                        <span className="text-black_900 text-[18px] font-notosanstc font-bold">
                          裝置認證碼明碼{" "}
                        </span>
                        <span className="text-black_900 text-[18px] font-notosanstc">
                          兩種形式之裝置認證碼
                        </span>
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[13px] md:mt-[17px] mt-[20px] w-[100%]">
                      <Text
                        className="font-bold sm:mt-[3px] md:mt-[4px] mt-[5px] text-red_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        *
                      </Text>
                      <Text
                        className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] ml-[10px] md:ml-[8px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[96%]"
                        variant="body1"
                      >
                        <span className="text-black_900 text-[18px] font-notosanstc">
                          若行動裝置具照相機功能，建議使用健保署「健保快易通」行動服務之
                          APP 以
                        </span>
                        <span className="text-black_900 text-[18px] font-notosanstc font-bold">
                          讀取 QR-Code 方式
                        </span>
                        <span className="text-black_900 text-[18px] font-notosanstc">
                          進行裝置認證
                        </span>
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[13px] md:mt-[17px] mt-[20px] w-[100%]">
                      <Text
                        className="font-bold sm:mt-[3px] md:mt-[4px] mt-[5px] text-red_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        *
                      </Text>
                      <Text
                        className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] ml-[10px] md:ml-[8px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[96%]"
                        variant="body1"
                      >
                        若行動裝置不具照相機功能，建議使用健保署「健保快易通」行動服務之
                        APP 可將頁面之裝置認證碼明碼輸入手機裝置認證
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:px-[0] rounded-radius8 sm:w-[100%] w-[68%]">
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate2}
                  >
                    回上頁{" "}
                  </Button>
                  <Button className="cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]">
                    產生裝置認證碼
                  </Button>
                </Row>
              </Column>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[42px] md:mt-[55px] mt-[64px] w-[100%]">
              <Column className="bg-blue_50 flex flex-col items-center justify-end sm:mb-[19px] md:mb-[24px] mb-[29px] sm:mx-[0] sm:p-[15px] md:p-[30px] p-[35px] rounded-radius16 sm:w-[100%] w-[87%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[23px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Img
                    src="images/img_quickmark.svg"
                    className="md:h-[122px] h-[141px] sm:h-[94px] max-w-[100%] md:w-[121px] w-[141px] sm:w-[93px]"
                    alt="quickmark"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[28px] mt-[33px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      <span className="text-black_900 text-[20px] font-notosanstc">
                        裝置認證碼：
                      </span>
                      <span className="text-black_900 text-[20px] font-notosanstc font-bold">
                        X17d25fQ
                      </span>
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                      <Text
                        className="font-bold sm:mt-[3px] md:mt-[4px] mt-[5px] text-red_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        *
                      </Text>
                      <Text
                        className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:ml-[6px] ml-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[97%]"
                        variant="body1"
                      >
                        裝置認證碼有效時間至民國 110 年 8 月 31 日 21 : 33 : 33
                        <br />
                        若超過裝置認證碼有效時間，請重新產生裝置認證碼
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Img
                src="images/img_question.svg"
                className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:mt-[258px] md:mt-[334px] mt-[389px] sm:w-[23px] md:w-[30px] w-[35px]"
                alt="question"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Two7Page;
