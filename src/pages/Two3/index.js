import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Line,
  List,
  Button,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const Two3Page = () => {
  const navigate = useNavigate();

  function handleNavigate92() {
    navigate("/one4");
  }
  function handleNavigate102() {
    navigate("/three2");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1011px] mb-[2px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
              <Text className="text-indigo_800 w-[auto]" as="h4" variant="h4">
                註冊健保卡網路服務系統
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                <Stack className="h-[64px] sm:pr-[15px] md:pr-[21px] pr-[25px] relative w-[100%]">
                  <Stack className="absolute h-[64px] sm:w-[100%] w-[89%]">
                    <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[78%]">
                      <Stack className="absolute h-[64px] left-[0] sm:w-[100%] w-[71%]">
                        <Stack className="absolute h-[64px] left-[0] md:pl-[13px] sm:pl-[15px] pl-[16px] sm:w-[100%] w-[59%]">
                          <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                          <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                            <Text
                              className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                              variant="body1"
                            >
                              1
                            </Text>
                            <Text
                              className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                              variant="body1"
                            >
                              安裝讀卡機元件
                            </Text>
                          </Column>
                        </Stack>
                        <Stack className="absolute h-[64px] md:pl-[13px] sm:pl-[15px] pl-[16px] right-[0] sm:w-[100%] w-[59%]">
                          <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                          <Column className="absolute flex flex-col items-center justify-start left-[25%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                            <Text
                              className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                              variant="body1"
                            >
                              2
                            </Text>
                            <Text
                              className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                              variant="body1"
                            >
                              健保卡讀取確認
                            </Text>
                          </Column>
                        </Stack>
                      </Stack>
                      <Stack className="absolute h-[64px] sm:pl-[15px] md:pl-[21px] pl-[25px] right-[0] sm:w-[100%] w-[42%]">
                        <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                        <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                          <Text
                            className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                            variant="body1"
                          >
                            3
                          </Text>
                          <Text
                            className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                            variant="body1"
                          >
                            填寫基本資料
                          </Text>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="absolute h-[64px] sm:pl-[15px] md:pl-[21px] pl-[25px] right-[0] w-[32%]">
                      <Line className="absolute bg-blue_600 h-[2px] right-[0] top-[23%] sm:w-[100%] w-[59%]" />
                      <Column className="absolute flex flex-col items-center justify-start left-[39%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                          variant="body1"
                        >
                          4
                        </Text>
                        <Text
                          className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                          variant="body1"
                        >
                          設定註冊密碼
                        </Text>
                      </Column>
                    </Stack>
                  </Stack>
                  <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[39%] sm:w-[100%] w-[14%]">
                    <Text
                      className="bg-blue_100 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                      variant="body1"
                    >
                      5
                    </Text>
                    <Text
                      className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-gray_400 w-[auto]"
                      variant="body1"
                    >
                      確認註冊資訊
                    </Text>
                  </Column>
                </Stack>
                <Column className="bg-blue_50 flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] sm:p-[15px] md:p-[34px] p-[40px] rounded-radius8 w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                      <Text
                        className="text-black_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        設定註冊密碼
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[17px] ml-[20px] mt-[10px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                        <Text
                          className="font-bold text-red_500 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          *
                        </Text>
                        <Text
                          className="font-medium sm:ml-[5px] md:ml-[6px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          必填
                        </Text>
                      </Row>
                    </Row>
                    <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                      <List
                        className="sm:gap-[21px] md:gap-[27px] gap-[32px] grid min-h-[auto] sm:w-[100%] w-[63%]"
                        orientation="vertical"
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                            <Text
                              className="font-bold text-red_500 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              *
                            </Text>
                            <Text
                              className="font-bold sm:ml-[5px] md:ml-[6px] ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[5px] text-black_900 w-[auto]"
                              variant="body1"
                            >
                              註冊密碼
                            </Text>
                          </Row>
                          <Button
                            className="flex items-center justify-center min-w-[55%] text-center w-[max-content]"
                            onClick={handleNavigate102}
                            rightIcon={
                              <Img
                                src="images/img_dashboard.svg"
                                className="ml-[16px] sm:ml-[10px] md:ml-[13px] text-center"
                                alt="dashboard"
                              />
                            }
                            variant="OutlineGray401"
                          >
                            <div className="common-pointer bg-transparent cursor-pointer font-bold text-[14px] text-gray_401">
                              請輸入註冊密碼
                            </div>
                          </Button>
                        </Row>
                        <Line className="self-center w-[100%] mt-[32px] sm:mt-[21px] sm:px-[0] md:mt-[27px] justify-between items-center flex-row flex" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                            <Text
                              className="font-bold sm:mb-[4px] md:mb-[6px] mb-[7px] text-red_500 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              *
                            </Text>
                            <Text
                              className="font-bold sm:ml-[5px] md:ml-[6px] ml-[8px] sm:mt-[3px] md:mt-[5px] mt-[6px] text-black_900 w-[auto]"
                              variant="body1"
                            >
                              確認密碼
                            </Text>
                          </Row>
                          <Button
                            className="flex items-center justify-center min-w-[55%] text-center w-[max-content]"
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
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                          <Text
                            className="font-bold sm:mb-[4px] md:mb-[6px] mb-[7px] text-red_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            *
                          </Text>
                          <Text
                            className="font-bold sm:ml-[5px] md:ml-[6px] ml-[8px] sm:mt-[3px] md:mt-[5px] mt-[6px] text-black_900 w-[auto]"
                            variant="body1"
                          >
                            行動電話
                          </Text>
                        </Row>
                        <Column className="flex flex-col justify-start md:ml-[34px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                            <Button
                              className="cursor-pointer font-bold sm:h-[27px] md:h-[35px] h-[40px] text-[14px] text-center text-gray_401 sm:w-[26px] md:w-[34px] w-[40px]"
                              size="md"
                              variant="OutlineGray401"
                            >
                              00
                            </Button>
                            <Line className="bg-bluegray_900 h-[2px] sm:ml-[3px] md:ml-[5px] ml-[6px] sm:my-[12px] md:my-[16px] my-[19px] w-[5%]" />
                            <Button
                              className="cursor-pointer font-bold min-w-[63%] sm:ml-[3px] md:ml-[5px] ml-[6px] text-[14px] text-center text-gray_401 w-[max-content]"
                              size="md"
                              variant="OutlineGray401"
                            >
                              00000000
                            </Button>
                          </Row>
                          <Text
                            className="font-bold sm:mt-[5px] md:mt-[6px] mt-[8px] text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            將做為未來行動裝置之認證使用
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[19px] sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                        <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body1"
                          >
                            聯絡電話
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[34px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                          <Button
                            className="cursor-pointer font-bold sm:h-[27px] md:h-[35px] h-[40px] text-[14px] text-center text-gray_401 sm:w-[26px] md:w-[34px] w-[40px]"
                            size="md"
                            variant="OutlineGray401"
                          >
                            00
                          </Button>
                          <Line className="bg-bluegray_900 h-[2px] sm:my-[12px] md:my-[16px] my-[19px] w-[4%]" />
                          <Button
                            className="cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-gray_401 w-[max-content]"
                            size="md"
                            variant="OutlineGray401"
                          >
                            00000000
                          </Button>
                          <Text
                            className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            #
                          </Text>
                          <div className="bg-white_A700 border border-gray_401 border-solid sm:h-[27px] md:h-[35px] h-[40px] rounded-radius8 w-[22%]"></div>
                        </Row>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-bold text-red_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            *
                          </Text>
                          <Text
                            className="font-bold sm:ml-[5px] md:ml-[6px] ml-[8px] sm:mt-[3px] md:mt-[5px] mt-[6px] text-black_900 w-[auto]"
                            variant="body1"
                          >
                            Email
                          </Text>
                        </Row>
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                          <Input
                            className="font-bold p-[0] text-[14px] placeholder:text-gray_401 text-gray_401 w-[100%]"
                            wrapClassName="sm:mx-[0] sm:w-[100%] w-[96%]"
                            name="FrameSeven"
                            placeholder="請輸入電子信箱"
                          ></Input>
                          <Text
                            className="font-bold sm:mt-[5px] md:mt-[6px] mt-[8px] text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            建議不要使用微軟電子信箱如 hotmail, livemail ...
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[16px] ml-[19px] sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          備用 Email
                        </Text>
                        <Input
                          className="font-bold p-[0] text-[14px] placeholder:text-gray_401 text-gray_401 w-[100%]"
                          wrapClassName="sm:mx-[0] sm:w-[100%] w-[74%]"
                          name="FrameSeven One"
                          placeholder="請輸入備用信箱"
                        ></Input>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate92}
                  >
                    上一步
                  </Button>
                  <Button
                    className="cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                    variant="FillBlue100"
                  >
                    下一步
                  </Button>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_question.svg"
              className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] mb-[4px] sm:ml-[65px] md:ml-[84px] ml-[98px] sm:mt-[553px] md:mt-[715px] mt-[832px] sm:w-[23px] md:w-[30px] w-[35px]"
              alt="question"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Two3Page;
