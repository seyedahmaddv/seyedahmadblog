---
title: "اختصاص نوع به پراپ های کامپوننت"
excerpt: "این به عنوان یک جهت‌دهی و مرجع ابتدایی برای توسعه‌دهندگان React که با TypeScript آشنا می‌شوند، طراحی شده است."
coverImage: "/assets/blog/dynamic-routing/typescript-vs-javascript.jpg"
date: "2024-02-01T05:35:07.322Z"
author:
  name: Seyed Ahmad
  picture: "/assets/blog/authors/seyedahmad.jpg"
ogImage:
  url: "/assets/blog/typescript-vs-javascript.jpeg"
---

## مثال‌های اولیه از انواع پایه
لیستی از انواع TypeScript که احتمالاً در یک برنامه React+TypeScript استفاده خواهید کرد:

    type AppProps = {
    message: string;
    count: number;
    disabled: boolean;
    /** آرایه از یک نوع! */
    names: string[];
    /** لیترال‌های رشته‌ای برای مشخص کردن مقادیر دقیق رشته، با یک نوع اتحاد برای اتصال آنها به هم */
    status: "waiting" | "success";
    /** یک شیء با ویژگی‌های شناخته‌شده (اما ممکن است در زمان اجرا بیشتر شود) */
    obj: {
        id: string;
        title: string;
    };
    /** آرایه از اشیاء! (رایج) */
    objArr: {
        id: string;
        title: string;
    }[];
    /** هر مقدار غیر ابتدایی - نمی‌توان به هیچ ویژگی دسترسی داشت (رایج نیست اما به عنوان جایگزین مفید) */
    obj2: object;
    /** یک رابط بدون ویژگی‌های اجباری - (رایج نیست، به جز برای مواردی مانند `React.Component<{}, State>`) */
    obj3: {};
    /** یک شیء دیکشنری با هر تعداد ویژگی از همان نوع */
    dict1: {
        [key: string]: MyTypeHere;
    };
    dict2: Record<string, MyTypeHere>; // معادل dict1
    /** تابعی که هیچ ورودی یا خروجی ندارد (خیلی رایج) */
    onClick: () => void;
    /** تابع با ورودی اسمی (خیلی رایج) */
    onChange: (id: number) => void;
    /** نحوه نوشتن نوع تابع که یک رویداد را می‌پذیرد (خیلی رایج) */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** نحوه نوشتن جایگزین برای نوع تابع که یک رویداد را می‌پذیرد (خیلی رایج) */
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    /** هر تابعی تا زمانی که آن را فراخوانی نکنید (توصیه نمی‌شود) */
    onSomething: Function;
    /** یک ویژگی اختیاری (خیلی رایج!) */
    optional?: OptionalType;
    /** هنگام انتقال تابع تنظیم‌کننده وضعیت که توسط `useState` به یک کامپوننت فرزند برگردانده شده است. `number` مثال است، با نوع وضعیت خود جایگزین کنید */
    setState: React.Dispatch<React.SetStateAction<number>>;
    };
