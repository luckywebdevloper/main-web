/** @format */

import { Avatar, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import logo from "../../../assets/logo.svg";
import { links } from "./navdata";

import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/user";
import { Button, Dropdown, Image, Navbar } from "@nextui-org/react";

const Header = ({ isAuthenticated = false, user }) => {
  const { onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };
  const asPath = useLocation().pathname;
  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="  sticky top-0 z-[1000] flex items-center">
        <Navbar className=" sticky top-0" css={{ background: "white" }}>
          <Navbar.Toggle showIn="xs" css={{ background: "transparent" }} />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}>
            <Link to={"/"}>
              <Image
                src={logo}
                display={"block"}
                className="sm:h-[80px] h-[40px] "
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            activeColor="success"
            hideIn="xs"
            variant="highlight">
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <Link to={url} key={id} onClick={scrollToBottom}>
                  <Navbar.Item
                    isActive={asPath === url}
                    style={{
                      alignItems: "center",
                      display: "flex",
                      height: "100%",
                      padding: "0",
                    }}
                    css={{ d: "flex" }}>
                    <Text b color="inherit">
                      {text}
                    </Text>
                  </Navbar.Item>
                </Link>
              );
            })}
          </Navbar.Content>
          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}>
            {isAuthenticated ? (
              <Dropdown placement="bottom-right">
                <Navbar.Item>
                  <Dropdown.Trigger>
                    <Avatar
                      bordered
                      as="button"
                      textColor="white"
                      size="md"
                      src={user.avatar.url}
                    />
                  </Dropdown.Trigger>
                </Navbar.Item>
                <Dropdown.Menu
                  aria-label="User menu actions"
                  color="success"
                  onAction={(actionKey) => console.log({ actionKey })}>
                  <Dropdown.Item key="profile" css={{ height: "$18" }} w>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      Signed in as
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      {user.email}
                    </Text>
                  </Dropdown.Item>

                  <Dropdown.Item key="system" withDivider>
                    <Link to="/profile" style={{ width: "100%" }}>
                      Edit Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="favorites">FAVORITES</Dropdown.Item>
                  <Dropdown.Item key="help_and_feedback" withDivider>
                    Help & Support
                  </Dropdown.Item>
                  <Dropdown.Item key="logout" withDivider color="error">
                    <Link onClick={logoutHandler} to="/">
                      {" "}
                      Log Out
                    </Link>
                  </Dropdown.Item>
                  {user && user.role === "admin" && (
                    <Dropdown.Item withDivider color="secondary" onClick={""}>
                      <Link onClick={onClose} to="/admin/dashboard">
                        <RiDashboardFill style={{ margin: "4px" }} />
                        Dashboard
                      </Link>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/login" className="">
                <Button
                  className=" text-white bg-green-600 my-2"
                  color={"success"}
                  rounded="true"
                  shadow="true"
                  size={"xs"}
                  css={{
                    "@md": {
                      width: "110px",
                      height: "28px",
                    },
                  }}>
                  Login
                </Button>
              </Link>
            )}
          </Navbar.Content>
          <Navbar.Collapse>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <Navbar.CollapseItem
                  key={id}
                  activeColor="success"
                  isActive={asPath === url}>
                  <Link
                    color="inherit"
                    css={{
                      minWidth: "100%",
                    }}
                    to={url}>
                    {text}
                  </Link>
                </Navbar.CollapseItem>
              );
            })}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
