import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "留學の道標",
  description: "日本での生活のガイド",
  themeConfig: {
    footer: {
      message: "",
      copyright: "copyright © 2025 foreign study in Japan",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "ミッション", link: "/docs/ミッション/ミッション" },
      { text: "入国", link: "/docs/入国/在留資格とは" },
      { text: "生活ガイド", link: "/docs/生活ガイド/住民登録・医療保険" },
      { text: "学校について", link: "/docs/学校について/なぜ日本留学" },
      { text: "卒業後進路", link: "/docs/卒業後の進路/日本で就職" },
      { text: "支援", link: "/docs/支援/留学生支援団体とは" },
    ],

    sidebar: {
      "/docs/入国/": [
        {
          text: "入國・ビザ・準備",
          items: [
            {
              text: "在留資格とは",
              link: "/docs/入国/在留資格とは",
            },
            { text: "来日前の準備", link: "/docs/入国/来日前の準備" },
            {
              text: "空港での流れ",
              link: "/docs/入国/空港での流れ",
            },
          ],
        },
      ],
      "/docs/学校について/": [
        {
          text: "学校について",
          items: [
            {
              text: "なぜ日本留学？",
              link: "/docs/学校について/なぜ日本留学",
            },

            {
              text: "学校の種類",
              link: "/docs/学校について/学校の種類",
            },

            {
              text: "留学スケジュール",
              link: "/docs/学校について/留学スケジュール",
            },
            {
              text: "費用・予算",
              link: "/docs/学校について/費用・予算",
            },
            { text: "JLPT・EJU", link: "/docs/学校について/JLPT・EJU" },
          ],
        },
      ],
      "/docs/生活ガイド/": [
        {
          text: "生活ガイド",
          items: [
            {
              text: "住民登録・医療保険",
              link: "/docs/生活ガイド/住民登録・医療保険",
            },
            {
              text: "口座開設・電話番号",
              link: "/docs/生活ガイド/口座開設・電話番号",
            },
            { text: "住まい", link: "/docs/生活ガイド/住まい" },
            { text: "緊急対応", link: "/docs/生活ガイド/緊急対応" },
            { text: "交通・通学", link: "/docs/生活ガイド/交通・通学" },
            { text: "ゴミ分別", link: "/docs/生活ガイド/ゴミ分別" },
            { text: "アルバイト", link: "/docs/生活ガイド/アルバイト" },
          ],
        },
      ],

      "/docs/卒業後の進路/": [
        {
          text: "卒業後の進路",
          items: [
            { text: "日本で就職", link: "/docs/卒業後の進路/日本で就職" },
            {
              text: "帰国・海外就職",
              link: "/docs/卒業後の進路/帰国・海外就職",
            },
            { text: "進学", link: "/docs/卒業後の進路/進学" },
          ],
        },
      ],
      "/docs/支援/": [
        {
          text: "支援団体・公共サービス",
          collapsed: false,
          items: [
            {
              text: "留学生支援団体とは",
              link: "/docs/支援/留学生支援団体とは",
            },
            {
              text: "大学・学校の支援窓口",
              link: "/docs/支援/大学・学校の支援窓口",
            },
            {
              text: "国・自治体の公共サービス",
              link: "/docs/支援/国・自治体の公共サービス",
            },
            {
              text: "相談窓口・ホットライン",
              link: "/docs/支援/相談窓口・ホットライン",
            },
            { text: "緊急時の対応", link: "/docs/支援/緊急時の対応" },
          ],
        },
      ],
    },
  },
});
