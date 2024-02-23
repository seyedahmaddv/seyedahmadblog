---
title: "آیا جاوا اسکریپت یک زبان داینامیک است و تایپ اسکریپت یک زبان استاتیک؟"
excerpt: "بله، جاوا اسکریپت یک زبان برنامه‌نویسی داینامیک است. این به این معنی است که در جاوا اسکریپت، متغیرها در زمان اجرا از نوع داده مشخصی برخوردار نیستند و می‌توانند به نوع داده‌ای دیگر تغییر کنند."
coverImage: "/assets/blog/dynamic-routing/typescript-vs-javascript.jpg"
date: "2024-02-01T05:35:07.322Z"
author:
  name: Seyed Ahmad
  picture: "/assets/blog/authors/seyedahmad.jpg"
ogImage:
  url: "/assets/blog/typescript-vs-javascript.jpeg"
---

در جاوا اسکریپت، شما می‌توانید یک متغیر را تعریف کنید و به آن هر نوع داده‌ای را اختصاص دهید. به عنوان مثال، در زمانی که یک متغیر را تعریف می‌کنید، می‌توانید به آن یک عدد، یک رشته، یک آرایه، یا حتی یک شیء (Object) اختصاص دهید. 

به عنوان یک زبان تایپ اسکریپت (TypeScript)، جاوا اسکریپت همچنین امکان استفاده از انواع داده را فراهم می‌کند. در TypeScript، می‌توانید انواع داده‌ای را برای متغیرها مشخص کنید و تعیین کنید که چه نوع داده‌ای از هر متغیر استفاده شود. این می‌تواند به توسعه‌دهندگان کمک کند تا در زمان کدنویسی و اجرا، اشکالات تایپ را برطرف کنند و کد ایمن‌تری داشته باشند.

آیا تایپ اسکریپت نیز یک زبان داینامیک است؟

نه، TypeScript یک زبان برنامه‌نویسی استاتیک است، نه زبان داینامیک. این بدان معنی است که TypeScript در زمان کامپایل و زمان اجرا از تعیین و اعلام نوع داده‌ها استفاده می‌کند و چک می‌کند که تطابق مناسبی بین نوع داده‌ها برقرار شود.

TypeScript یک فرم ویژه از جاوااسکریپت است که به آن قابلیت‌های تایپ‌گذاری را اضافه کرده است. با استفاده از تایپ اسکریپت، می‌توانید تعیین و اعلام نوع داده‌ها را در کد خود انجام داده و سپس در زمان کامپایل، اشکالات تایپ را کشف کنید.

در TypeScript، شما می‌توانید برای هر متغیر، پارامتر تابع، متد و سایر عناصر کد نوع داده‌ها را تعیین کنید. این بدان معنی نیست که نوع داده‌ها ثابت و تغییرناپذیر هستند، بلکه به شما کمک می‌کند تا در زمان کامپایل آنها را به صورت صحیح استفاده کنید و اشکالات تایپ را بررسی کنید.

بنابراین، در مقابل جاوااسکریپت که یک زبان داینامیک است و تایپ‌گذاری در آن در زمان اجرا اتفاق می‌افتد، TypeScript یک زبان استاتیک است که تایپ‌گذاری را در زمان کامپایل انجام می‌دهد.

آیا زبان جاوا اسکریپت از نوع weak است؟

جاوا اسکریپت و تایپ اسکریپت از نظر استرانگ یا ویک چگونه هستنند؟

جاوا اسکریپت و TypeScript در اصل از یک ساختار واحد به نام ECMAScript پیروی می‌کنند. این یعنی می‌توان زبان جاوا اسکریپت را به عنوان یک زیرمجموعه از زبان TypeScript در نظر گرفت. بنابراین، در بیشتر موارد، کد نوشته شده در جاوا اسکریپت قابل اجرا و استفاده در TypeScript است

.در جاوا اسکریپت، که یک زبان برنامه‌نویسی داینامیک است، تایپ‌گذاری در زمان اجرا صورت می‌گیرد. این بدان معنی است که نوع داده‌ها در زمان اجرا تعیین می‌شوند و می‌توانند در طول اجرای برنامه تغییر کنند. به عنوان مثال، یک متغیر در جاوا اسکریپت می‌تواند ابتدا به یک عدد، سپس به یک رشته و در ادامه به یک آرایه تغییر کند.

از طرف دیگر، در TypeScript که یک زبان برنامه‌نویسی استاتیک است، تایپ‌گذاری در زمان کامپایل انجام می‌شود. به این معنی که نوع داده‌ها در زمان کامپایل مشخص شده و می‌توانید نوع داده‌های متغیرها، پارامترها، توابع و سایر عناصر کد را تعیین کنید. این به شما کمک می‌کند که در زمان کامپایل خطاهای تایپ را کشف کرده و از قابلیت‌هایی مانند تکمیل کد (code completion) و ارائه راهنمایی‌های تایپی (type hints) بهره ببرید.

از این رو، TypeScript می‌تواند به عنوان یک ورژن استرانگ‌تایپ (strong typing) از جاوا اسکریپت در نظر گرفته شود. تایپ اسکریپت، از زبان جاوا اسکریپت الهام گرفته شده و قابلیت‌های تایپ‌گذاری اضافی را ارائه می‌دهد. با استفاده از TypeScript، می‌توانید کد بیشتری را تایپ‌سازی کرده و در زمان کامپایل خطاهای تایپ را آشکار کنید.

تایپ اسکریپت یک زبان weak است؟ زبانهای ویکی چه خصوصیاتی دارند؟زبانهای استرانگ چه خصوصیاتی دارند

بله، می‌توان گفت TypeScript در مقایسه با برخی از زبان‌هایی که تایپ‌گذاری قوی‌تری دارند، مانند C++ یا Rust، به عنوان یک زبان weak typing یا تایپ‌گذاری نسبتاً ضعیف در نظر گرفته می‌شود. این به این معنی است که TypeScript از جاوا اسکریپت که یک زبان داینامیک است، بهبودهایی در زمینه تایپ‌گذاری انجام داده است، اما به‌طور کامل تایپ‌گذاری قوی را پشتیبانی نمی‌کند.
## حالا بیایید به توضیح خصوصیات زبان‌های weak و strong typing بپردازیم:


زبان‌های weak typing (تایپ‌گذاری ضعیف):

در زبان‌های weak typing، متغیرها می‌توانند در طول اجرا نوع داده‌ای خود را تغییر دهند.
تبدیل نوع‌های داده به صورت ضمنی اتفاق می‌افتد و تنها در مواردی که لزومی وجود داشته باشد، نیاز به تبدیل صریح دارید.
در زبان‌های weak typing، عملیات‌های بین نوع‌های مختلف داده ممکن است به طور خودکار تبدیل شوند.
معمولاً در زبان‌های weak typing، میزان انعطاف و آسانی در استفاده و تغییر نوع داده‌ها بیشتر است.
زبان‌های strong typing (تایپ‌گذاری قوی):

در زبان‌های strong typing، نوع داده‌ها در زمان کامپایل یا قبل از اجرا مشخص می‌شوند و تغییر آنها در طول اجرا مجاز نیست.
تبدیل نوع‌ها به صورت صریح صورت می‌گیرد و عملیات تبدیل نوع صوری مشخص و قابل پیش‌بینی است.
در زبان‌های strong typing، عملیات بین نوع‌های مختلف داده نیاز به تبدیل صریح دارند و تبدیل‌های ضمنی اتفاق نمی‌افتد.
زبان‌های strong typing معمولاً قواعد سخت‌گیرانه‌تری درباره نوع داده‌ها و تطابق آنها دارند.

<img src="/assets/blog/dynamic-routing/What-is-the-difference-between-statically-typed-and-dynamically-typed-languages.jpg">


هر دو نوع تایپ‌گذاری قوی و ضعیف، مزایا و معایب خود را دارند و به میزان نیاز و محدودیت‌های هر پروژه و محیط بسته بستگی دارند. TypeScript تلاش می‌کند برخی از خصوصیات تایپ‌گذاری قوی را در مقایسه با جاوا اسکریپت فراهم کند، اما به دلیل ترکیبی از امکانات استاتیک و داینامیک، به عنوان یک زبان weak typing محسوب می‌شود.