import React from "react";

import { Column, Row, Img, Text, Stack, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const TwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate109() {
    navigate("/page1");
  }
  function handleNavigate110() {
    navigate("/mactwo");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1012px] sm:mb-[3px] md:mb-[5px] mb-[6px] ml-[auto] sm:mr-[3px] md:mr-[4px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row
            className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]"
            onClick={handleNavigate109}
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
                  <Column className="bg-blue_100 flex flex-col sm:h-[20px] md:h-[25px] h-[29px] items-center justify-end px-[4px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[29px]">
                    <Text
                      className="font-bold mt-[1px] text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      3
                    </Text>
                  </Column>
                  <Text
                    className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-gray_400 w-[auto]"
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
          <Column className="flex flex-col justify-start md:ml-[70px] ml-[82px] sm:mt-[29px] md:mt-[37px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Row className="bg-blue_50 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:p-[15px] md:p-[34px] p-[40px] rounded-radius16 sm:w-[100%] w-[86%]">
              <Column className="flex flex-col sm:mb-[12px] md:mb-[16px] mb-[19px] md:ml-[68px] ml-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                  健保卡讀取確認
                </Text>
                <Column className="flex flex-col font-notosanssc items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                    <Stack className="bg-light_blue_100 h-[192px] md:p-[10px] p-[12px] sm:p-[7px] relative rounded-radius8 sm:w-[100%] w-[59%]">
                      <Column
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] px-[1px] sm:w-[109px] md:w-[141px] w-[164px]"
                        style={{
                          backgroundImage: "url('images/img_group11.svg')",
                        }}
                      >
                        <Column className="flex flex-col justify-start sm:mb-[15px] md:mb-[20px] mb-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-bold text-teal_400 sm:tracking-ls4 md:tracking-ls6 tracking-ls72 w-[auto]"
                              variant="body2"
                            >
                              全民健康保險
                            </Text>
                            <Text
                              className="mt-[2px] text-teal_400 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              NATIONAL HEALTH INSURANCE
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-start md:ml-[18px] ml-[21px] sm:mt-[25px] md:mt-[33px] mt-[39px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                            <Text
                              className="font-bold text-black_900 md:tracking-ls2 sm:tracking-ls2 tracking-ls32 w-[auto]"
                              variant="body2"
                            >
                              您的姓名
                            </Text>
                            <Text
                              className="mt-[10px] sm:mt-[6px] md:mt-[8px] text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body5"
                            >
                              身分證字號
                            </Text>
                            <Text
                              className="mt-[3px] text-black_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body5"
                            >
                              出生年月日
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                      <Text
                        className="absolute bottom-[7%] left-[5%] text-black_900 tracking-ls064 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        0000 0000 0000
                      </Text>
                      <Row className="absolute bottom-[11%] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="max-w-[100%] sm:mt-[5px] md:mt-[6px] mt-[8px] w-[5%]"
                          alt="arrowleft"
                        />
                        <Img
                          src="images/img_videocamera_1.svg"
                          className="max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[5px] mt-[4px] w-[18%]"
                          alt="videocamera"
                        />
                        <div className="bg-white_A700 h-[108px] sm:h-[72px] md:h-[93px] md:ml-[104px] ml-[121px] sm:ml-[80px] rounded-radius6 w-[33%]"></div>
                      </Row>
                      <Stack className="absolute h-[42px] left-[10%] top-[0] sm:w-[27px] md:w-[36px] w-[42px]">
                        <div className="absolute bg-white_A700 sm:h-[22px] md:h-[29px] h-[33px] inset-x-[0] mx-[auto] rounded-radius50 top-[5%] sm:w-[21px] md:w-[28px] w-[33px]"></div>
                        <Img
                          src="images/img_websiteicon.png"
                          className="absolute sm:h-[28px] md:h-[37px] h-[42px] rounded-radius50 w-[100%]"
                          alt="WebsiteIcon One"
                        />
                      </Stack>
                    </Stack>
                    <Column className="flex flex-col font-notosanstc md:h-[123px] h-[142px] sm:h-[95px] items-end justify-start mb-[4px] sm:mt-[30px] md:mt-[39px] mt-[46px] md:w-[122px] w-[142px] sm:w-[94px]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Button
                          className="cursor-pointer font-bold text-[14px] text-center text-white_A700 w-[100%]"
                          variant="FillIndigo800"
                        >
                          檢測元件安裝設定
                        </Button>
                        <Button
                          className="cursor-pointer font-bold sm:mt-[13px] md:mt-[17px] mt-[20px] text-[14px] text-center text-white_A700 w-[100%]"
                          variant="FillIndigo800"
                        >
                          讀取健保卡
                        </Button>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[18px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                        <a
                          href={"javascript:"}
                          className="font-medium text-[14px] text-bluegray_900 underline w-[auto]"
                          rel="noreferrer"
                        >
                          發生錯誤？
                        </a>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Img
                src="images/img_checkmark_22X22.svg"
                className="sm:h-[15px] md:h-[19px] h-[22px] max-w-[100%] sm:ml-[11px] md:ml-[14px] ml-[17px] sm:w-[14px] md:w-[18px] w-[22px]"
                alt="checkmark"
              />
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
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
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[29px] md:mt-[37px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mb-[13px] md:mb-[18px] mb-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  onClick={handleNavigate110}
                >
                  上一步
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                  variant="FillBlue100"
                >
                  下一步
                </Button>
              </Row>
              <Img
                src="images/img_question.svg"
                className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[223px] md:ml-[288px] ml-[335px] sm:mt-[17px] md:mt-[22px] mt-[26px] sm:w-[23px] md:w-[30px] w-[35px]"
                alt="question"
              />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default TwoPage;
