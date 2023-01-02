import React from "react";

import { Column, Row, Img, Text, Button, Line, Input } from "components";
import { useNavigate } from "react-router-dom";

const Two6Page = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/three5");
  }
  function handleNavigate11() {
    navigate("/page9");
  }
  function handleNavigate12() {
    navigate("/one9");
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
          <Column className="bg-blue_50 flex flex-col items-center justify-end sm:mt-[39px] md:mt-[50px] mt-[59px] sm:mx-[0] sm:p-[15px] md:p-[46px] p-[54px] rounded-radius16 sm:w-[100%] w-[91%]">
            <Column className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[5px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
              <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                基本資料異動
              </Text>
              <Column className="flex flex-col justify-start sm:mt-[39px] md:mt-[51px] mt-[60px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body1"
                    >
                      行動電話
                    </Text>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[34px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                    <Button
                      className="cursor-pointer font-bold sm:h-[27px] md:h-[35px] h-[40px] text-[14px] text-bluegray_900 text-center sm:w-[26px] md:w-[34px] w-[40px]"
                      size="md"
                      variant="OutlineGray401"
                    >
                      09
                    </Button>
                    <Line className="bg-black_900 h-[2px] sm:my-[12px] md:my-[16px] my-[19px] w-[5%]" />
                    <Button
                      className="cursor-pointer font-bold min-w-[63%] text-[14px] text-bluegray_900 text-center w-[max-content]"
                      size="md"
                      variant="OutlineGray401"
                    >
                      12345678
                    </Button>
                  </Row>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body1"
                  >
                    聯絡電話
                  </Text>
                  <Row
                    className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[34px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]"
                    onClick={handleNavigate10}
                  >
                    <Button
                      className="cursor-pointer font-bold sm:h-[27px] md:h-[35px] h-[40px] text-[14px] text-bluegray_900 text-center sm:w-[26px] md:w-[34px] w-[40px]"
                      size="md"
                      variant="OutlineGray401"
                    >
                      02
                    </Button>
                    <Line className="bg-black_900 h-[2px] sm:my-[12px] md:my-[16px] my-[19px] w-[4%]" />
                    <Button
                      className="cursor-pointer font-bold min-w-[44%] text-[14px] text-bluegray_900 text-center w-[max-content]"
                      size="md"
                      variant="OutlineGray401"
                    >
                      87654321
                    </Button>
                    <Text
                      className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-black_900 w-[auto]"
                      variant="body3"
                    >
                      #
                    </Text>
                    <div className="bg-white_A700 border border-gray_401 border-solid sm:h-[27px] md:h-[35px] h-[40px] rounded-radius8 w-[22%]"></div>
                  </Row>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Email
                    </Text>
                  </Column>
                  <Input
                    className="font-bold p-[0] text-[14px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                    wrapClassName="md:ml-[52px] ml-[61px] sm:mx-[0] sm:w-[100%] w-[74%]"
                    type="email"
                    name="email One"
                    placeholder="ming0123@xxxx.xxx"
                    size="md"
                  ></Input>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body1"
                  >
                    備用 Email
                  </Text>
                  <Input
                    className="font-bold p-[0] text-[14px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                    wrapClassName="md:ml-[18px] ml-[21px] sm:mx-[0] sm:w-[100%] w-[74%]"
                    type="email"
                    name="email Three"
                    placeholder="3210abcd@xxxx.xxx"
                    size="md"
                  ></Input>
                </Row>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate11}
                >
                  回上頁
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate12}
                >
                  儲存
                </Button>
              </Row>
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

export default Two6Page;
