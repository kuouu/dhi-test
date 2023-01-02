import React from "react";

import { Column, Row, Img, Text, Stack, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const One2Page = () => {
  const navigate = useNavigate();

  function handleNavigate77() {
    navigate("/page1");
  }
  function handleNavigate78() {
    navigate("/three");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1012px] sm:mb-[3px] md:mb-[5px] mb-[6px] ml-[auto] sm:mr-[3px] md:mr-[4px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row
            className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]"
            onClick={handleNavigate77}
          >
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
            className="sm:ml-[217px] md:ml-[280px] ml-[326px] sm:mt-[28px] md:mt-[36px] mt-[43px] text-indigo_800 w-[auto]"
            as="h4"
            variant="h4"
          >
            登入健保卡網路服務系統
          </Text>
          <Stack className="h-[64px] ml-[105px] sm:ml-[69px] md:ml-[90px] sm:mt-[24px] md:mt-[31px] mt-[37px] md:px-[13px] sm:px-[15px] px-[16px] relative sm:w-[100%] w-[75%]">
            <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[3%] sm:w-[100%] w-[95%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Column className="flex flex-col items-center mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                      <Column className="bg-blue_600 flex flex-col sm:h-[20px] md:h-[25px] h-[29px] items-center justify-end px-[4px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[29px]">
                        <Text
                          className="font-bold mt-[1px] text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          1
                        </Text>
                      </Column>
                      <Text
                        className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        安裝讀卡機元件
                      </Text>
                    </Column>
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                      <Column className="bg-blue_600 flex flex-col sm:h-[20px] md:h-[25px] h-[29px] items-center justify-end px-[4px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[29px]">
                        <Text
                          className="font-bold mt-[1px] text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          2
                        </Text>
                      </Column>
                      <Text
                        className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                        variant="body1"
                      >
                        健保卡讀取確認
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                  <Column className="bg-blue_600 flex flex-col sm:h-[20px] md:h-[25px] h-[29px] items-center justify-end px-[4px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[29px]">
                    <Text
                      className="font-bold mt-[1px] text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      3
                    </Text>
                  </Column>
                  <Text
                    className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                    variant="body1"
                  >
                    填寫登入資訊
                  </Text>
                </Column>
              </Row>
            </Column>
            <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center sm:mx-[0] mx-[auto] sm:px-[0] top-[23%] sm:w-[100%] w-[76%]">
              <Line className="bg-blue_600 h-[2px] sm:w-[100%] w-[48%]" />
              <Line className="bg-blue_600 h-[2px] sm:ml-[17px] md:ml-[23px] ml-[27px] sm:w-[100%] w-[48%]" />
            </Row>
          </Stack>
          <Column className="flex flex-col justify-start md:ml-[70px] ml-[82px] sm:mt-[19px] md:mt-[25px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Column className="bg-blue_50 flex flex-col items-end justify-start sm:mx-[0] sm:pl-[15px] md:pl-[32px] pl-[38px] sm:pt-[15px] md:pt-[32px] pt-[38px] rounded-radius16 sm:w-[100%] w-[86%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                  填寫登入資訊
                </Text>
                <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] sm:pb-[30px] md:pb-[39px] pb-[46px] sm:pr-[15px] md:pr-[39px] pr-[46px] w-[100%]">
                  <Stack className="h-[40px] relative sm:w-[100%] w-[56%]">
                    <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center left-[0] sm:mx-[0] md:pr-[6px] pr-[7px] sm:px-[0] sm:py-[4px] md:py-[6px] py-[7px] sm:w-[100%] w-[74%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body1"
                      >
                        帳號
                      </Text>
                      <Text
                        className="font-bold sm:ml-[28px] md:ml-[36px] ml-[43px] my-[1px] text-indigo_800 w-[auto]"
                        variant="body2"
                      >
                        陳小美
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="sm:h-[13px] md:h-[17px] h-[19px] max-w-[100%] sm:ml-[22px] md:ml-[29px] ml-[34px] sm:w-[12px] md:w-[16px] w-[19px]"
                        alt="checkmark"
                      />
                    </Row>
                    <Text
                      className="absolute h-[max-content] inset-y-[0] my-[auto] right-[0] text-indigo_800 w-[auto]"
                      variant="body4"
                    >
                      帳號即是您的健保卡姓名
                    </Text>
                  </Stack>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body1"
                    >
                      密碼
                    </Text>
                    <Text
                      className="bg-white_A700 border border-gray_401 border-solid font-bold sm:ml-[26px] md:ml-[34px] ml-[40px] md:pl-[13px] pl-[16px] md:pr-[30px] pr-[35px] sm:px-[15px] py-[10px] sm:py-[6px] md:py-[8px] rounded-radius8 text-gray_401 w-[160px]"
                      variant="body3"
                    >
                      請輸入密碼
                    </Text>
                  </Row>
                  <a
                    href={"javascript:"}
                    className="font-medium sm:ml-[117px] md:ml-[151px] ml-[176px] mt-[11px] sm:mt-[7px] md:mt-[9px] text-[12px] text-bluegray_900 underline w-[auto]"
                    rel="noreferrer"
                  >
                    忘記密碼？
                  </a>
                </Column>
              </Column>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[12px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
              <Img
                src="images/img_warning.svg"
                className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[23px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[23px]"
                alt="warning"
              />
              <Text
                className="flex-grow font-normal sm:ml-[5px] md:ml-[7px] ml-[9px] not-italic text-blue_600"
                variant="body2"
              >
                為確保您的個人資訊安全權益，登入時需要您利用讀卡機讀取健保卡，造成不便還請見諒。
              </Text>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[39px] md:mt-[50px] mt-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mb-[17px] md:mb-[23px] mb-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate78}
                >
                  上一步
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  variant="FillBlue100"
                >
                  登入
                </Button>
              </Row>
              <Img
                src="images/img_question.svg"
                className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[223px] md:ml-[288px] ml-[335px] sm:mt-[21px] md:mt-[27px] mt-[32px] sm:w-[23px] md:w-[30px] w-[35px]"
                alt="question"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default One2Page;
