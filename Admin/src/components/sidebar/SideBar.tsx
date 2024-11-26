"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiShoppingBag,
  HiTable,
  HiUsers,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { BiSolidCategory } from "react-icons/bi";
export default function SideBar() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={NavLink} to={`/dashboard`} icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={BiSolidCategory} label="Categories">
            <Sidebar.Item as={NavLink} to={`/all-category`} icon={HiShoppingBag}>
              All Category
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item as={NavLink} to={`/products`} icon={HiShoppingBag}>
            All Products
          </Sidebar.Item>
          <Sidebar.Item as={NavLink} to={`/all-order`} icon={CiViewList}>
            Order List
          </Sidebar.Item>
          <Sidebar.Item as={NavLink} to={`/all-users`} icon={HiUsers}>
            Customers
          </Sidebar.Item>
          <Sidebar.Item as={NavLink} to={`/sign-in`} icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item as={NavLink} to={`/sign-up`} icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
