import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const One10Page = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/two7");
  }
  function handleNavigate9() {
    navigate("/page9");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col items-end justify-start max-w-[882px] sm:ml-[37px] md:ml-[49px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
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
          <Column className="bg-blue_50 flex flex-col items-center justify-end sm:mt-[39px] md:mt-[50px] mt-[59px] sm:mx-[0] sm:p-[15px] md:p-[38px] p-[45px] rounded-radius16 sm:w-[100%] w-[91%]">
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
                  onClick={handleNavigate9}
                >
                  回上頁{" "}
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate8}
                >
                  產生裝置認證碼
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="flex flex-col items-end max-w-[1011px] sm:mb-[3px] md:mb-[5px] mb-[6px] sm:ml-[37px] md:ml-[49px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] md:mt-[11px] mt-[13px] sm:mt-[8px] sm:pl-[15px] md:pl-[839px] pl-[976px] sm:pr-[15px] w-[100%]">
          <Img
            src="images/img_question.svg"
            className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:w-[23px] md:w-[30px] w-[35px]"
            alt="question"
          />
        </Column>
      </Column>
    </>
  );
};

export default One10Page;
