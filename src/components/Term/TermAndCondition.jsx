import {
  Button,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
// import { Link } from 'react-router-dom';
import term from "../../assets/termandcondition.png";
import Footer from "../Layout/Footer/Footer";
import { forwardRef } from "react";

const TermAndCondition = (ref) => {
  return (
    <>
      <div className="container_home">
        <section className="home">
          <div className="container">
            <Stack
              direction={["column"]}
              height={["100%"]}
              justifyContent={"center"}
              alignItems="center"
              spacing={["28"]}
            >
              <Image
                className="bannerimg"
                boxSize={["2xl"]}
                src={term}
                objectFit="contain"
              />
              <Heading
                fontSize={["2xl", "3xl", "3xl", "5xl"]}
                fontWeight="bold"
                className="heading_1"
                marginTop={"10"}
              >
                <span>Stockology</span>Securities Pvt. Ltd.
                <Text
                  fontSize={"sm"}
                  fontWeight="medium"
                  textAlign={"center"}
                  my="4"
                >
                  Protects data & information
                </Text>
              </Heading>
            </Stack>
            <Tabs
              borderRadius={"2xl"}
              colorScheme="green"
              w={"100%"}
              textColor="blue.700"
            >
              <TabList>
                <Tab fontWeight={"bold"} w={"50%"}>
                  Terms and Conditions
                </Tab>
                <Tab fontWeight={"bold"} w={"50%"}>
                  Privacy Policies
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel textAlign={"justify"}>
                  <Text fontSize={"sm"} my="4">
                    This section contains the Terms and Conditions of Use of
                    this website. By accessing this website and any of its
                    pages, you are agreeing to these Terms and Conditions. You
                    also agree that Stockology Securities Pvt Ltd can modify or
                    alter the terms and conditions of the use of this service
                    without any liability.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    If you have registered on the Stockology Securities Pvt Ltd
                    website by submitting your contact details, you are
                    authorizing Stockology Securities Pvt Ltd to contact you and
                    send promotional communication even though you may be
                    registered under the National Do Not Call Registry
                    established under the Telecom Unsolicited Commercial
                    Communications Regulations, 2007 or registered or may
                    register under the National Customer Preference Register
                    established under new regulation viz the Telecom Commercial
                    Communications Customer Preference Regulations, 2010.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    1. Stockology Securities Pvt Ltd or any of its affiliates
                    shall not be liable for any misrepresentation,
                    falsification, and deception or for any lack of availability
                    of services through the website, even if the same are
                    advertised on the website.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    2. No judgment or warranty or representation is made with
                    respect to the accuracy, timeliness, or suitability of the
                    content of other services or sites to which these screens
                    link, and Stockology Securities Pvt Ltd shall not be
                    responsible therefore.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    3. Stockology Securities Pvt Ltd shall not be liable if the
                    Customer downloads any information or software from this
                    website. Further, Stockology Securities Pvt Ltd shall not be
                    liable if the Customer makes a copy, modifies, uploads,
                    downloads, transmits, (re) publishes it or removes or
                    obscures any intellectual property, including trademarks,
                    copyright or other notices or legends contained in any such
                    information or otherwise distributes any service or content
                    from this website. Stockology Securities Pvt Ltd shall not
                    bear the responsibility if the Customer modifies or uses the
                    content or services he/she gets from this website for any
                    purpose other than those permitted, and in doing so violates
                    the intellectual property including trademarks, copyright
                    and other proprietary rights of Stockology Securities Pvt
                    Ltd
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    4. The content of the articles and the interpretation of
                    data are solely the personal views of the contributors and
                    do not in any way reflect the views of Stockology Securities
                    Pvt Ltd. Users are advised to read carefully the articles
                    and other data in the website only for their information and
                    to rely on their own judgment when making investment
                    decisions. The investments discussed or recommended may not
                    be suitable for all investors. Stockology Securities Pvt Ltd
                    does not warranty the timeliness, accuracy or quality of the
                    electronic content.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    5. The website contains features of the services that are
                    currently being offered by Stockology Securities Pvt Ltd and
                    those intended to be offered in the future. Stockology
                    Securities Pvt Ltd intends to launch the services confirming
                    with the features listed on the website in total, however
                    due to business need and regulatory requirement the final
                    launch may contain variations. Notwithstanding anything
                    contained in the website regarding the services, Stockology
                    Securities Pvt Ltd may decide to postpone the offering of
                    the services or may even decide to withdraw the offering or
                    even a currently offered service altogether.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    6. Stockology Securities Pvt Ltd reserves the right at any
                    time and from time to time to modify or discontinue,
                    temporarily or permanently, the Service (or any part
                    thereof) with or without notice at any time. You agree that
                    Stockology Securities Pvt Ltd shall not be liable to you or
                    to any third party for any modification, suspension or
                    discontinuance of the Service.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    7. Registration: In order to use Stockology Securities Pvt
                    Ltd Service, you must have a valid Stockology Securities Pvt
                    Ltd ID (an “Account”). To be a Registered Member, you must
                    provide with certain personal information (“Registration
                    Data”). You will choose an Account name and password and
                    provide a contact email address during the Service’s
                    registration process. You are responsible for maintaining
                    the confidentiality of the password, and are fully
                    responsible for all activities that occur under your
                    password or Account. You agree to: (a) immediately notify
                    Stockology Securities Pvt Ltd of any unauthorized use of
                    your password or Account or any other breach of security,
                    and (b) ensure that you sign out and exit from your Account
                    at the end of each session. Stockology Securities Pvt Ltd
                    shall not be liable for any loss or damage arising from your
                    failure to comply with this. In consideration of use of this
                    Service, you agree to provide true, accurate, current and
                    complete information about yourself as prompted by the
                    Stockology Securities Pvt Ltd registration form. If you
                    provide any information that is untrue, inaccurate, not
                    current or incomplete, or Stockology Securities Pvt Ltd has
                    reasonable grounds to suspect that such information is
                    untrue, inaccurate, not current or incomplete, Stockology
                    Securities Pvt Ltd has the right to suspend or terminate
                    your Account and refuse any and all current or future use of
                    this service (or any portion thereof).
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    8. Privacy Policy: Registration Data and certain other
                    information about you is subject to{" "}
                    <a
                      href="https://stockologysecurities.com/"
                      target={"_blank"}
                    >
                      https://stockologysecurities.com/
                    </a>{" "}
                    . Please read this policy carefully.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    9. You are responsible for maintaining the security of your
                    Account and any information you provide on Stockology
                    Securities Pvt Ltd, and you are fully responsible for all
                    activities that occur under the Account and any other
                    actions taken in connection with the Discussion Board. You
                    agree to immediately notify Stockology Securities Pvt Ltd of
                    any unauthorized uses of the Account or any other breaches
                    of security. Stockology Securities Pvt Ltd cannot and will
                    not be liable for any loss or damage from your failure to
                    comply with this security obligation. You acknowledge and
                    agree that under no circumstances will Stockology Securities
                    Pvt Ltd be liable, in any way, for any acts or omissions by
                    a Registered Member or any third party, including any
                    damages of any kind incurred as a result of such acts or
                    omissions.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    10. Content Submitted: Stockology Securities Pvt Ltd does
                    not claim any ownership of the Content you place on the
                    discussion board or in any forum on or within the Site.
                    However, by submitting Content to Stockology Securities Pvt
                    Ltd for inclusion on any forum on or within the Site (a
                    “Forum”), you grant Stockology Securities Pvt Ltd a
                    worldwide, irrevocable, perpetual, royalty-free,
                    non-exclusive license to reproduce, modify, adapt and
                    publish such Content. Additionally, by submitting Content to
                    Stockology Securities Pvt Ltd for inclusion in any Forum,
                    you permit anyone to copy, distribute, display and perform
                    your Content, royalty-free, on the condition that they
                    credit your authorship each time they do so.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    11. You agree and acknowledge that you are responsible for
                    maintaining the security of your password and other Account
                    access information, and furthermore that any action taken or
                    Content posted, uploaded or transmitted using your Account
                    shall be deemed made by you for the purpose of accrual of
                    this indemnity obligation. Each user, viewer and Registered
                    Member is solely responsible for his or her actions, costs
                    and expenses when using the Service, including, but not
                    limited to, costs incurred for internet access.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    12. The entire “news and markets data” is sourced from “An
                    external data content agency” and Stockology Securities Pvt
                    Ltd is not responsible for its “integrity / availability” of
                    the same.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    13. Additional Software: With respect to any additional
                    software that may be made available by Stockology Securities
                    Pvt Ltd in connection with the Service, if you elect to
                    download or access such additional software, you understand
                    that you may have to agree to additional terms and
                    conditions before and as a condition of your use of such
                    software.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    14. Stockology Securities Pvt Ltd is not responsible for the
                    content of any of the linked sites. By providing access to
                    other web-sites, Stockology Securities Pvt Ltd is neither
                    recommending nor endorsing the content available in the
                    linked websites.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    15. You understand that the technical processing and
                    transmission of the Service, including your Content, may
                    involve (a) transmissions over various networks; and (b)
                    changes to conform and adapt to technical requirements of
                    connecting networks or devices.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    16. Trademarks and Copyright: The content and information
                    contained within our website or delivered to you in
                    connection with your use of our website is the property of
                    Stockology Securities Pvt Ltd and any other third party
                    (where applicable). The trademark, trade names and logos
                    (the “Trade Marks”) that are used and displayed on our
                    website include registered and unregistered Trade Marks of
                    Stockology Securities Pvt Ltd and other third parties.
                    Nothing on our website should be construed as granting any
                    license or right to use any Trade Marks displayed on our
                    website. We retain all proprietary rights on our website.
                    Users are prohibited from using the same without written
                    permission of Stockology Securities Pvt Ltd of such or such
                    other parties. The materials on this website are protected
                    by copyright and no part of such materials may be modified,
                    reproduced, stored in a retrieval system, transmitted (in
                    any form or by any means), copied, distributed, used for
                    creating derivative works or used in any other way for
                    commercial or public purposes without the Bank’s prior
                    written consent.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    17. The content of the website cannot be copied, reproduced,
                    republished, uploaded, posted, transmitted or distributed
                    for any non-personal use without obtaining prior permission
                    from Stockology Securities Pvt Ltd. The company reserves the
                    right to terminate the accounts of subscribers/customers,
                    who violate the proprietary rights, in addition to necessary
                    legal action. These terms and conditions shall be applicable
                    to any person visiting/accessing the website and/or a
                    Customer entering into an agreement related to availing of
                    the Service offered by Stockology Securities Pvt Ltd. 18. By
                    signing up on this website or sharing my number with
                    Stockology Securities Pvt Ltd, I hereby authorise Stockology
                    Securities Pvt Ltd (registered AP of CHOICE BROKING), its
                    group companies and their agents/representatives to contact
                    me via telephone calls/SMSs/Whatsapp/emails/post etc.
                    including but not limited to promotional communications,
                    from time to time, irrespective of whether I am registered
                    as a Do No Disturb customer with TRAI or any Telecom Service
                    Provider. If you do not agree to any of the terms mentioned
                    in this agreement, you should exit the site. Important : By
                    accessing this website and any of its pages you are agreeing
                    to the terms set out above.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    Website Reference:-
                    <a
                      href="https://stockologysecurities.com/term-and-conditions/"
                      target={"_blank"}
                    >
                      https://stockologysecurities.com/term-and-conditions/
                    </a>
                  </Text>
                </TabPanel>
                <TabPanel px={"20"} textAlign="justify">
                  <Text fontSize={"sm"} my="4">
                    STOCKOLOGY SECURITIES PVT LTD would like to thank you for
                    visiting our website. Respecting the Privacy and choices of
                    our online Customers and Visitors is important for us. We
                    hope that the information provided below will address any
                    questions or concerns you may have about Privacy issues.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    Generally, you may anonymously and obtain information about
                    our group Companies, products and services without providing
                    any personal information, such as your phone number or
                    postal or e-mail address.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    In a few sections of our website, we ask you to provide
                    information that will enable us to enhance your site visit
                    or to follow up with you after your visit. It is completely
                    optional for you to participate. For example, we request
                    information from you when you :
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    1. Register with STOCKOLOGY SECURITIES
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    2. Transact on the site.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    3. Provide feedback in an online survey.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    4. Participate in contests or games.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    5. Request your order status.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    6. Subscribe to a newsletter or a mailing list.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    In each of the above instances, we may ask for your name,
                    e-mail address, telephone number, address, login name,
                    password or password validation and other personal
                    information that is needed to register or subscribe you to
                    services or offers.
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    The personal information you provide will be kept
                    confidential and used to support our customer relationship
                    with you. We may use the information you provide to inform
                    you of special offers, upgrades and other services that may
                    be of interest to you. We may selectively share your
                    information TradingBells affiliates or other companies may
                    selectively share your information with TradingBells
                    affiliates or other companies and organizations whose
                    products or services we think may be of interest to you. We
                    will, whenever called upon to do so, disclose your personal
                    information to any Government, Central or State, local or
                    public or regulatory authority such as the Securities and
                    Exchanges Board of India (SEBI), Reserve Bank of India (RBI)
                    or such other authority. If you do not want to receive
                    information about special offers, upgrades, newsletter,
                    mailing list from STOCKOLOGY SECURITIES or its affiliates,
                    you will be given the opportunity to “opt out” and we will
                    respect your wishes. The personal data of customers and web
                    site visitors is stored indefinitely and may be collected
                    and processed in one or more data bases maintained directly
                    or indirectly by STOCKOLOGY SECURITIES. By providing
                    personal information to STOCKOLOGY SFCURITIFS vou agree and
                    tinderstand that
                  </Text>
                  <Text fontSize={"sm"} my="4">
                    STOCKOLOGY is not responsible for the privacy practices of
                    non- STOCKOLOGY sites to which STOCKOLOGY SECURITIES or any
                    other STOCKOLOGY SECURITIES website may link. We encourage
                    you to become familiar with the privacy practices of these
                    sites before you provide them with personal information.
                  </Text>
                  {/* <Heading ></Heading> */}
                  <Text fontSize={"sm"} my="4">
                    We may from time to time update this Policy. When we do so,
                    we will post notice of any revisions on this site. We
                    encourage you to review our Privacy Policy whenever you
                    visit our website.
                  </Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                  <Text fontSize={"sm"} my="4"></Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermAndCondition;
