import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Line,
  SelectBox,
  Button,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const Two5Page = () => {
  const navigate = useNavigate();

  function handleNavigate81() {
    navigate("/page4");
  }
  function handleNavigate82() {
    navigate("/three1");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-notosanstc items-end justify-start mx-[auto] sm:p-[15px] md:p-[33px] p-[39px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[1011px] ml-[auto] sm:mr-[3px] md:mr-[5px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[39px] md:mt-[51px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
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
                      className="bg-blue_600 flex font-bold items-center sm:px-[5px] md:px-[7px] px-[9px] rounded-radius50 text-white_A700 w-[29px]"
                      variant="body1"
                    >
                      5
                    </Text>
                    <Text
                      className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-indigo_800 w-[auto]"
                      variant="body1"
                    >
                      確認註冊資訊
                    </Text>
                  </Column>
                </Stack>
                <Column className="bg-blue_50 flex flex-col items-center justify-end sm:mt-[26px] md:mt-[34px] mt-[40px] sm:p-[15px] md:p-[34px] p-[40px] rounded-radius8 w-[100%]">
                  <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[5px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Text
                      className="text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      確認註冊資訊
                    </Text>
                    <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[40px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          姓名
                        </Text>
                        <Text
                          className="bg-white_A700 border border-gray_401 border-solid font-bold sm:ml-[50px] md:ml-[65px] ml-[76px] md:pl-[13px] pl-[16px] md:pr-[30px] pr-[35px] sm:px-[15px] sm:py-[5px] md:py-[7px] py-[9px] rounded-radius8 text-bluegray_900 w-[160px]"
                          variant="body3"
                        >
                          陳小美
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          戶號
                        </Text>
                        <Column className="flex flex-col items-center md:ml-[65px] ml-[76px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                          <Text
                            className="bg-white_A700 border border-gray_401 border-solid font-bold md:pl-[13px] pl-[16px] md:pr-[30px] pr-[35px] sm:px-[15px] md:py-[10px] py-[12px] sm:py-[7px] rounded-radius8 text-bluegray_900 w-[160px]"
                            variant="body3"
                          >
                            A0123456
                          </Text>
                        </Column>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[32px] w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          戶籍地址
                        </Text>
                        <Row
                          className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]"
                          onClick={handleNavigate81}
                        >
                          <SelectBox
                            className="font-bold sm:mx-[0] text-[14px] text-bluegray_900 sm:w-[100%] w-[23%]"
                            placeholderClassName="text-bluegray_900"
                            name="FrameSeven"
                            placeholder="臺北市"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_vector.svg"
                                className="w-[11px] mr-[14px] sm:mr-[9px] sm:w-[7px] md:mr-[12px] md:w-[9px] max-w-[100%]"
                                alt="Vector"
                              />
                            }
                          ></SelectBox>
                          <SelectBox
                            className="font-bold sm:mx-[0] text-[14px] text-bluegray_900 sm:w-[100%] w-[28%]"
                            placeholderClassName="text-bluegray_900"
                            name="FrameEight Two"
                            placeholder="大安區"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_vector.svg"
                                className="w-[11px] mr-[8px] sm:mr-[5px] sm:w-[7px] md:mr-[6px] md:w-[9px] max-w-[100%]"
                                alt="Vector"
                              />
                            }
                          ></SelectBox>
                          <SelectBox
                            className="font-bold sm:mx-[0] text-[14px] text-bluegray_900 sm:w-[100%] w-[24%]"
                            placeholderClassName="text-bluegray_900"
                            name="FrameNine"
                            placeholder="民輝里"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_vector.svg"
                                className="w-[11px] mr-[16px] sm:mr-[10px] sm:w-[7px] md:mr-[13px] md:w-[9px] max-w-[100%]"
                                alt="Vector"
                              />
                            }
                            size="md"
                          ></SelectBox>
                          <Text
                            className="bg-white_A700 border border-gray_401 border-solid font-bold md:pl-[13px] pl-[16px] md:pr-[30px] pr-[35px] sm:px-[15px] py-[10px] sm:py-[6px] md:py-[8px] rounded-radius8 text-bluegray_900 w-[80px]"
                            variant="body3"
                          >
                            6 鄰
                          </Text>
                        </Row>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
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
                            variant="OutlineGray401"
                          >
                            09
                          </Button>
                          <Line className="bg-black_900 h-[2px] sm:my-[12px] md:my-[16px] my-[19px] w-[5%]" />
                          <Button
                            className="cursor-pointer font-bold min-w-[63%] text-[14px] text-bluegray_900 text-center w-[max-content]"
                            variant="OutlineGray401"
                          >
                            12345678
                          </Button>
                        </Row>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          聯絡電話
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[34px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                          <div className="bg-white_A700 border border-gray_401 border-solid sm:h-[27px] md:h-[35px] h-[40px] rounded-radius8 sm:w-[26px] md:w-[34px] w-[40px]"></div>
                          <Line className="bg-black_900 h-[2px] sm:my-[12px] md:my-[16px] my-[19px] w-[4%]" />
                          <div className="bg-white_A700 border border-gray_401 border-solid sm:h-[27px] md:h-[35px] h-[40px] rounded-radius8 sm:w-[100%] w-[44%]"></div>
                          <Text
                            className="font-bold md:mt-[11px] mt-[13px] sm:mt-[8px] text-black_900 w-[auto]"
                            variant="body3"
                          >
                            #
                          </Text>
                          <div className="bg-white_A700 border border-gray_401 border-solid sm:h-[27px] md:h-[35px] h-[40px] rounded-radius8 w-[22%]"></div>
                        </Row>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
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
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body1"
                        >
                          備用 Email
                        </Text>
                        <div className="bg-white_A700 border border-gray_401 border-solid sm:h-[27px] md:h-[35px] h-[40px] sm:ml-[13px] md:ml-[18px] ml-[21px] rounded-radius8 sm:w-[100%] w-[74%]"></div>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                  <Button
                    className="cursor-pointer font-bold min-w-[44%] text-[14px] text-center text-white_A700 w-[max-content]"
                    variant="FillBlue100"
                  >
                    修改
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[44%] sm:ml-[26px] md:ml-[34px] ml-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate82}
                  >
                    儲存
                  </Button>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_question.svg"
              className="sm:h-[24px] md:h-[31px] h-[35px] max-w-[100%] sm:ml-[65px] md:ml-[84px] ml-[98px] sm:mt-[567px] md:mt-[732px] mt-[852px] sm:w-[23px] md:w-[30px] w-[35px]"
              alt="question"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Two5Page;
