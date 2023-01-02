import React from "react";

import { Column, Row, Img, Text, Button, Stack } from "components";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();

  function handleNavigate31() {
    navigate("/page1");
  }
  function handleNavigate32() {
    navigate("/page1");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col h-[1012px] sm:h-[674px] md:h-[871px] justify-start max-w-[1012px] sm:mb-[3px] md:mb-[5px] mb-[6px] ml-[auto] sm:mr-[3px] md:mr-[4px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[673px] md:w-[870px]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
            <Row
              className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]"
              onClick={handleNavigate31}
            >
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[280px] ml-[326px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
              <Button
                className="common-pointer cursor-pointer font-bold min-w-[46%] text-[14px] text-center text-light_blue_900 w-[max-content]"
                onClick={handleNavigate32}
                variant="FillBlue100"
              >
                登出
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[46%] text-[14px] text-center text-white_A700 w-[max-content]"
                variant="FillBlue700"
              >
                我的健保卡
              </Button>
            </Row>
          </Row>
          <Column className="flex flex-col justify-start sm:mt-[42px] md:mt-[55px] mt-[64px] sm:px-[0] w-[100%]">
            <Text className="text-indigo_800 w-[auto]" as="h4" variant="h4">
              歡迎來到健保卡網路服務註冊系統！
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[22px] md:mt-[29px] mt-[34px] w-[100%]">
              <Column className="bg-blue_50 flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:p-[15px] md:p-[24px] p-[28px] rounded-radius24 sm:w-[100%] w-[95%]">
                <Column className="flex flex-col justify-start sm:mb-[21px] md:mb-[27px] mb-[32px] sm:mt-[11px] md:mt-[15px] mt-[18px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text
                    className="font-medium text-indigo_800 w-[auto]"
                    variant="body1"
                  >
                    此網站能夠協助您：
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Text
                      className="font-medium mt-[1px] text-light_blue_900 w-[auto]"
                      variant="body1"
                    >
                      ◉ 認證行動裝置，連接健保快易通 app
                    </Text>
                    <Text
                      className="font-medium md:ml-[117px] ml-[137px] sm:ml-[91px] text-light_blue_900 w-[auto]"
                      variant="body1"
                    >
                      ◉ 建立帳號並連接健康存摺，查看個人醫療資訊
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[15px] mt-[18px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Stack className="bg-white_A700 h-[252px] p-[10px] sm:p-[6px] md:p-[8px] relative rounded-radius12 sm:w-[100%] w-[47%]">
                      <Img
                        src="images/img_app10805231.png"
                        className="absolute h-[216px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[95%]"
                        alt="app10805231"
                      />
                    </Stack>
                    <Img
                      src="images/img_image9.png"
                      className="max-w-[100%] rounded-radius12 sm:w-[100%] w-[47%]"
                      alt="imageNine"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[41px] md:mt-[54px] mt-[63px] w-[100%]">
                    <Text
                      className="font-medium text-light_blue_900 w-[auto]"
                      variant="body1"
                    >
                      ◉ 更新您的健保卡服務個人資料
                    </Text>
                    <Text
                      className="font-medium mt-[1px] text-light_blue_900 w-[auto]"
                      variant="body1"
                    >
                      ◉ 建立帳號並連接個人健保資料，查看個人投保資訊
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[19px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Img
                      src="images/img_image10.png"
                      className="max-w-[100%] rounded-radius12 sm:w-[100%] w-[47%]"
                      alt="imageTen"
                    />
                    <Img
                      src="images/img_frame121.png"
                      className="max-w-[100%] rounded-radius12 sm:w-[100%] w-[47%]"
                      alt="Frame121"
                    />
                  </Row>
                </Column>
              </Column>
              <Img
                src="images/img_question.svg"
                className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:mt-[517px] md:mt-[668px] mt-[777px] sm:w-[23px] md:w-[30px] w-[35px]"
                alt="question"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page2;
