const mockData = {
    facilities: [
        {
            id: 1,
            name: { ko: "GS25 대학본부점", en: "GS25 University Main Bldg", zh: "GS25 大学本部店" },
            category: "convenience",
            location: { lat: 35.967, lng: 126.957 },
            description: { 
                ko: "24시간 운영. 외국인 등록증 결제 가능. ATM 있음.",
                en: "Open 24/7. Alien Registration Card accepted. ATM available.",
                zh: "24小时营业。接受外国人登录证结账。有ATM机。"
            },
            isMentorRecommended: false,
            rating: 4.2
        },
        {
            id: 2,
            name: { ko: "유니프린트", en: "UniPrint", zh: "UniPrint 打印店" },
            category: "print",
            location: { lat: 35.968, lng: 126.958 },
            description: {
                ko: "학생회관 1층. 컬러 100원, 흑백 50원. USB 출력 가능.",
                en: "Student Union 1F. Color 100 KRW, B/W 50 KRW. USB printing available.",
                zh: "学生会馆1楼。彩色100韩元，黑白50韩元。支持USB打印。"
            },
            isMentorRecommended: true,
            mentorComment: {
                ko: "과제 출력할 때 가장 싸고 빠릅니다!",
                en: "Cheapest and fastest place to print assignments!",
                zh: "打印作业最便宜、最快的地方！"
            },
            rating: 4.8
        },
        {
            id: 3,
            name: { ko: "학생건강공제회 약국", en: "Student Health Pharmacy", zh: "学生健康互助会药局" },
            category: "hospital",
            location: { lat: 35.966, lng: 126.956 },
            description: {
                ko: "학생증 제시 시 약값 할인.",
                en: "Discount on medicine when showing student ID.",
                zh: "出示学生证买药有折扣。"
            },
            isMentorRecommended: true,
            mentorComment: {
                ko: "감기 걸렸을 때 꼭 여기로 가세요. 학생 할인됩니다.",
                en: "Definitely go here when you have a cold. Student discount applies.",
                zh: "感冒时一定要去这里。有学生折扣。"
            },
            rating: 4.5
        },
        {
            id: 4,
            name: { ko: "학식 (학생식당)", en: "Student Cafeteria", zh: "学生食堂" },
            category: "restaurant",
            location: { lat: 35.969, lng: 126.955 },
            description: {
                ko: "매일 바뀌는 메뉴. 5,000원에 든든한 식사 가능. 키오스크 영어 지원.",
                en: "Menu changes daily. Hearty meal for 5,000 KRW. Kiosk supports English.",
                zh: "菜单每天更换。5,000韩元即可吃饱。自助点餐机支持英文。"
            },
            isMentorRecommended: true,
            mentorComment: {
                ko: "가성비 최고의 식사!",
                en: "Best value for a meal!",
                zh: "性价比最高的饭菜！"
            },
            rating: 4.0
        }
    ],
    categories: [
        { id: "all", icon: "🌍", name: { ko: "전체", en: "All", zh: "全部" } },
        { id: "convenience", icon: "🏪", name: { ko: "편의점", en: "Convenience", zh: "便利店" } },
        { id: "restaurant", icon: "🍚", name: { ko: "식당", en: "Restaurant", zh: "餐厅" } },
        { id: "hospital", icon: "🏥", name: { ko: "약국/병원", en: "Medical", zh: "医院/药局" } },
        { id: "print", icon: "🖨️", name: { ko: "프린트", en: "Print", zh: "打印" } }
    ]
};
