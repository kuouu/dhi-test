import React from "react";

import { Column, Row, Img, Text, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const Page10 = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/page9");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col items-end justify-start max-w-[880px] sm:ml-[37px] md:ml-[49px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
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
          <Column className="bg-blue_50 flex flex-col items-center justify-end sm:mt-[39px] md:mt-[50px] mt-[59px] sm:mx-[0] sm:p-[15px] md:p-[56px] p-[66px] rounded-radius8 sm:w-[100%] w-[91%]">
            <Column className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[5px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
              <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                註冊密碼變更
              </Text>
              <List
                className="sm:gap-[21px] md:gap-[27px] gap-[32px] grid min-h-[auto] sm:mt-[39px] md:mt-[51px] mt-[60px] sm:w-[100%] w-[84%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body1"
                    >
                      新密碼
                    </Text>
                  </Column>
                  <Button
                    className="flex items-center justify-center min-w-[59%] text-center w-[max-content]"
                    rightIcon={
                      <Img
                        src="images/img_dashboard.svg"
                        className="ml-[16px] sm:ml-[10px] md:ml-[13px] text-center"
                        alt="dashboard"
                      />
                    }
                    variant="OutlineGray401"
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_401">
                      請輸入註冊密碼
                    </div>
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body1"
                    >
                      確認密碼
                    </Text>
                  </Column>
                  <Button
                    className="flex items-center justify-center min-w-[59%] text-center w-[max-content]"
                    rightIcon={
                      <Img
                        src="images/img_dashboard.svg"
                        className="ml-[16px] sm:ml-[10px] md:ml-[13px] text-center"
                        alt="dashboard"
                      />
                    }
                    variant="OutlineGray401"
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_401">
                      請確認註冊密碼
                    </div>
                  </Button>
                </Row>
              </List>
              <Column className="flex flex-col items-center justify-start sm:mt-[39px] md:mt-[51px] mt-[60px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                  <Text
                    className="font-bold sm:mt-[3px] md:mt-[4px] mt-[5px] text-red_500 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    *
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:ml-[6px] ml-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                    variant="body1"
                  >
                    若您已認證行動裝置，此密碼會同步變更「健保快易通」登入註冊密碼。
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[39px] md:mt-[51px] mt-[60px] w-[100%]">
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate6}
                  >
                    回上頁
                  </Button>
                  <Button className="cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]">
                    儲存
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="flex flex-col items-end max-w-[1011px] sm:mb-[3px] md:mb-[5px] mb-[6px] sm:ml-[37px] md:ml-[49px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] sm:mt-[21px] md:mt-[28px] mt-[33px] sm:pl-[15px] md:pl-[839px] pl-[976px] sm:pr-[15px] w-[100%]">
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

export default Page10;
