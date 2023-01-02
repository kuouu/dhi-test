import React from "react";

import { Column, Row, Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const Four4Page = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/page9");
  }
  function handleNavigate1() {
    navigate("/three5");
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
          <Column className="bg-blue_50 flex flex-col items-center justify-end sm:mt-[39px] md:mt-[50px] mt-[59px] sm:mx-[0] sm:p-[15px] md:p-[55px] p-[64px] rounded-radius16 sm:w-[100%] w-[91%]">
            <Column className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[5px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
              <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                基本資料異動
              </Text>
              <Column className="flex flex-col justify-start sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:pt-[3px] md:pt-[4px] pt-[5px] sm:px-[0] sm:w-[100%] w-[93%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body1"
                  >
                    行動電話
                  </Text>
                  <Text
                    className="font-bold sm:ml-[29px] md:ml-[38px] ml-[45px] mt-[1px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    0912345678
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[24px] md:mt-[31px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body1"
                  >
                    聯絡電話
                  </Text>
                  <Text
                    className="font-bold sm:ml-[29px] md:ml-[38px] ml-[45px] mt-[1px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    0212345678
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[23px] md:mt-[30px] mt-[36px] w-[100%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body1"
                  >
                    E-mail
                  </Text>
                  <Text
                    className="font-bold sm:ml-[39px] md:ml-[51px] ml-[60px] mt-[1px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    ming0123@xxxx.xxx
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[24px] md:mt-[31px] mt-[37px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body1"
                  >
                    備用E-mail
                  </Text>
                  <Text
                    className="font-bold sm:ml-[15px] md:ml-[20px] ml-[24px] mt-[1px] text-bluegray_900 w-[auto]"
                    variant="body1"
                  >
                    abcd3210@xxxx.xxx
                  </Text>
                </Row>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[39px] md:mt-[51px] mt-[60px] w-[100%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate}
                >
                  回上頁
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate1}
                >
                  編輯
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="flex flex-col items-end max-w-[1011px] sm:mb-[3px] md:mb-[5px] mb-[6px] sm:ml-[37px] md:ml-[49px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] sm:mt-[43px] md:mt-[55px] mt-[65px] sm:pl-[15px] md:pl-[839px] pl-[976px] sm:pr-[15px] w-[100%]">
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

export default Four4Page;
