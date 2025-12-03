
import { DailyItinerary, FlightInfo, SpotType } from './types';

export const FLIGHTS: FlightInfo[] = [
  {
    type: 'Depart',
    date: '2026/01/13',
    airline: '台灣虎航',
    flightNumber: 'IT216',
    from: 'TPE 桃園 T1',
    to: 'HND 羽田 T3',
    time: '00:10 - 04:00',
    terminal: 'T3'
  },
  {
    type: 'Return',
    date: '2026/01/24',
    airline: '中華航空',
    flightNumber: 'CI101',
    from: 'NRT 成田 T2',
    to: 'TPE 桃園 T2',
    time: '14:35 - 17:45',
    terminal: 'T2'
  }
];

export const TRIP_DATA: DailyItinerary[] = [
  {
    date: '01/12',
    dayOfWeek: 'Day 0',
    weather: { temp: '15°C', condition: '涼爽舒適', icon: '✈️' },
    hotel: {
      name: '機上 / 往機場',
      address: '',
      mapUrl: ''
    },
    spots: [
      {
        id: 'd0-1',
        time: '19:00',
        name: '台北車站機場捷運',
        type: SpotType.TRANSPORT,
        description: '集合準備前往機場。',
        cost: 'NT$160',
        isPriority: true,
        tips: '班次：每15分鐘一班直達車。車程約36分。'
      },
      {
        id: 'd0-2',
        time: '20:00',
        name: '抵達桃園機場',
        type: SpotType.TRANSPORT,
        description: '第一航廈辦理登機。',
        isPriority: true,
        tips: '請檢查護照、Visit Japan Web QR Code。'
      }
    ]
  },
  {
    date: '01/13',
    dayOfWeek: 'Day 1',
    weather: { temp: '5°C', condition: '陰天微冷', icon: '☁️' },
    hotel: {
      name: '大和魯內仙台西口飯店',
      address: '仙台西口',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+Sendai-nishiguchi'
    },
    spots: [
      {
        id: 'd1-1',
        time: '04:00',
        name: '抵達羽田機場 (HND)',
        type: SpotType.TRANSPORT,
        description: '預計 06:00 入境完成。',
        isPriority: true
      },
      {
        id: 'd1-2',
        time: '07:08',
        name: '前往仙台 (轉乘)',
        type: SpotType.TRANSPORT,
        description: '羽田 -> 品川 -> 東京 -> 仙台',
        cost: '¥11,720 (總計)',
        tags: ['事先購買新幹線'],
        tips: '07:08 京急線往品川 -> 07:37 轉乘JR山手線往東京 -> 08:18 東北新幹線 Hayabusa 往仙台。'
      },
      {
        id: 'd1-3',
        time: '10:30',
        name: '仙台站 & 飯店寄放行李',
        type: SpotType.HOTEL,
        description: '購買「盧普仙台」觀光巴士一日券 (¥630)。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Station'
      },
      {
        id: 'd1-food-1',
        time: '12:00',
        name: '牛たん炭焼 利久 仙台駅店',
        type: SpotType.RESTAURANT,
        description: '午餐：厚切牛舌定食。',
        tags: ['必吃美食', '排隊名店'],
        tips: '營業時間 10:00-21:00。仙台牛舌名店。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Rikyu+Sendai+Station'
      },
      {
        id: 'd1-4',
        time: '14:00',
        name: '瑞鳳殿',
        type: SpotType.SIGHTSEEING,
        description: '伊達政宗靈廟。',
        cost: '¥570',
        tips: '營業時間至 16:50。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zuihoden'
      },
      {
        id: 'd1-5',
        time: '15:30',
        name: '仙台城跡',
        type: SpotType.SIGHTSEEING,
        description: '伊達政宗騎馬像、俯瞰市景。',
        cost: '免費',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Castle+Ruins'
      },
      {
        id: 'd1-6',
        time: '17:00',
        name: 'AER 展望台 & 購物',
        type: SpotType.SIGHTSEEING,
        description: '免費夜景與購物中心。',
        tips: '展望台開放至 20:00。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=AER+Observation+Terrace'
      },
      {
        id: 'd1-7',
        time: '19:00',
        name: '一番町/中央通商店街',
        type: SpotType.SHOPPING,
        description: '藥妝、逛街購物。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ichibancho+Shopping+Arcade'
      },
      // Backups
      {
        id: 'd1-backup-1',
        time: '候補',
        name: '烤牛舌 善治郎',
        type: SpotType.RESTAURANT,
        description: '仙台站前本店，牛舌定食。',
        tags: ['候補美食']
      },
      {
        id: 'd1-backup-2',
        time: '候補',
        name: '味之牛舌 喜助',
        type: SpotType.RESTAURANT,
        description: '牛舌套餐。',
        tags: ['候補美食']
      },
      {
        id: 'd1-backup-3',
        time: '候補',
        name: '仙台站內壽司店',
        type: SpotType.RESTAURANT,
        description: '新鮮壽司。',
        tags: ['候補美食']
      },
      {
        id: 'd1-backup-4',
        time: '候補',
        name: 'ずんだ茶寮 (毛豆奶昔)',
        type: SpotType.DESSERT,
        description: '仙台必喝毛豆奶昔。',
        tags: ['必吃甜點']
      }
    ]
  },
  {
    date: '01/14',
    dayOfWeek: 'Day 2',
    weather: { temp: '-1°C', condition: '間歇陣雪', icon: '❄️' },
    hotel: {
      name: '古勢起屋本館',
      address: '銀山溫泉',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kosekiya+Ginzan+Onsen'
    },
    spots: [
      {
        id: 'd2-1',
        time: '09:00',
        name: 'Alamo Rent A Car 取車',
        type: SpotType.TRANSPORT,
        description: '取車 (4WD)。開車約40分至松島。',
        isPriority: true,
        tips: '請準備日文譯本駕照、護照。'
      },
      {
        id: 'd2-2',
        time: '09:40',
        name: '松島海岸 & 遊覽船',
        type: SpotType.SIGHTSEEING,
        description: '日本三景之一。遊覽船觀賞260島嶼。',
        cost: '¥1,500',
        tips: '遊船約50分鐘，每小時一班。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Matsushima+Bay'
      },
      {
        id: 'd2-3',
        time: '11:00',
        name: '瑞巖寺 & 五大堂',
        type: SpotType.SIGHTSEEING,
        description: '國寶寺廟與地標。',
        cost: '¥700',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zuiganji+Temple'
      },
      {
        id: 'd2-food-1',
        time: '12:00',
        name: '松島魚市場 (松島さかな市場)',
        type: SpotType.RESTAURANT,
        description: '午餐：海鮮丼、烤牡蠣。',
        tags: ['必吃美食'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Matsushima+Fish+Market'
      },
      {
        id: 'd2-4',
        time: '13:30',
        name: '開車前往銀山溫泉',
        type: SpotType.TRANSPORT,
        description: '車程約 1小時40分。',
        tips: '直接開進停車場，打電話給旅館接駁。'
      },
      {
        id: 'd2-5',
        time: '16:00',
        name: '銀山溫泉街',
        type: SpotType.SIGHTSEEING,
        description: '大正浪漫風情，神隱少女原型。',
        tags: ['拍照熱點'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ginzan+Onsen'
      },
      {
        id: 'd2-backup-1',
        time: '候補',
        name: '松島牡蠣屋',
        type: SpotType.RESTAURANT,
        description: '牡蠣料理專門店。'
      },
      {
        id: 'd2-backup-2',
        time: '候補',
        name: '伊豆之華',
        type: SpotType.DESSERT,
        description: '蕎麥冰淇淋。'
      }
    ]
  },
  {
    date: '01/15',
    dayOfWeek: 'Day 3',
    weather: { temp: '-2°C', condition: '小雪紛飛', icon: '❄️' },
    hotel: {
      name: '山形格蘭飯店',
      address: '山形市',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yamagata+Grand+Hotel'
    },
    spots: [
      {
        id: 'd3-1',
        time: '10:00',
        name: '德良湖',
        type: SpotType.SIGHTSEEING,
        description: '雪景湖泊。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Tokura+Lake'
      },
      {
        id: 'd3-2',
        time: '12:00',
        name: '山形霞城公園',
        type: SpotType.SIGHTSEEING,
        description: '山形城跡，冬季雪景。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kajo+Park'
      },
      {
        id: 'd3-food-1',
        time: '13:00',
        name: 'そば処 明友庵',
        type: SpotType.RESTAURANT,
        description: '午餐：手打蕎麥麵。',
        tags: ['在地美食'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sobadokoro+Meiyu-an'
      },
      {
        id: 'd3-3',
        time: '15:30',
        name: '上杉神社',
        type: SpotType.SIGHTSEEING,
        description: '米澤城遺址。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Uesugi+Shrine'
      },
      {
        id: 'd3-4',
        time: '17:00',
        name: '上山城',
        type: SpotType.SIGHTSEEING,
        description: '夜間點燈 (至21:00)。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kaminoyama+Castle'
      },
      {
        id: 'd3-backup-1',
        time: '候補',
        name: '榮屋本店',
        type: SpotType.RESTAURANT,
        description: '冷拉麵 (冷しラーメン)。'
      },
      {
        id: 'd3-backup-2',
        time: '候補',
        name: '米澤牛 登起波',
        type: SpotType.RESTAURANT,
        description: '高級米澤牛料理。'
      }
    ]
  },
  {
    date: '01/16',
    dayOfWeek: 'Day 4',
    weather: { temp: '-5°C', condition: '大雪/暴風雪', icon: '🌨️' },
    hotel: {
      name: '德巴特小度假飯店',
      address: '藏王溫泉',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Petit+Resort+Hotel+Der+Barte'
    },
    spots: [
      {
        id: 'd4-1',
        time: '10:00',
        name: '藏王纜車・樹冰觀賞',
        type: SpotType.SIGHTSEEING,
        description: '搭乘纜車至地藏山頂站看「雪怪」。',
        cost: '¥4,400',
        tags: ['必看絕景'],
        tips: '山上極冷，請務必保暖。纜車票現場購買。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Ropeway'
      },
      {
        id: 'd4-2',
        time: '12:00',
        name: '藏王溫泉大露天風呂',
        type: SpotType.SIGHTSEEING,
        description: '日本最大露天溫泉。',
        cost: '¥600',
        tags: ['冬季可能關閉請確認'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Onsen+Dai+Rotemburo'
      },
      {
        id: 'd4-food-1',
        time: '13:00',
        name: 'きくち食堂 (Kikuchi Shokudo)',
        type: SpotType.RESTAURANT,
        description: '午餐：成吉思汗烤羊肉定食。',
        tags: ['必吃美食'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kikuchi+Shokudo+Zao'
      },
      {
        id: 'd4-3',
        time: '14:30',
        name: '藏王溫泉滑雪場 / 溫泉街',
        type: SpotType.SIGHTSEEING,
        description: '滑雪或散步。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Onsen+Ski+Resort'
      },
       {
        id: 'd4-backup-1',
        time: '候補',
        name: '三五郎小屋',
        type: SpotType.RESTAURANT,
        description: '溫泉咖哩飯。'
      },
      {
        id: 'd4-backup-2',
        time: '候補',
        name: 'ZAO stand MY',
        type: SpotType.DESSERT,
        description: '稲花餅。'
      }
    ]
  },
  {
    date: '01/17',
    dayOfWeek: 'Day 5',
    weather: { temp: '2°C', condition: '陰偶有雪', icon: '☁️' },
    hotel: {
      name: '仙台大都會飯店東館',
      address: '仙台站東口',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Metropolitan+Sendai+East'
    },
    spots: [
      {
        id: 'd5-1',
        time: '10:30',
        name: '藏王狐狸村',
        type: SpotType.SIGHTSEEING,
        description: '冬季狐狸毛色蓬鬆。',
        cost: '¥1,000',
        tags: ['小心隨身物品'],
        tips: '車程約1.5小時。禁止觸摸狐狸。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Zao+Fox+Village'
      },
      {
        id: 'd5-2',
        time: '13:30',
        name: '金蛇水神社',
        type: SpotType.SIGHTSEEING,
        description: '以金運聞名，黑色御守。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kanahebisui+Shrine'
      },
      {
        id: 'd5-3',
        time: '15:00',
        name: '秋保大瀑布',
        type: SpotType.SIGHTSEEING,
        description: '冬季結冰瀑布。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Akiu+Great+Falls'
      },
      {
        id: 'd5-4',
        time: '18:00',
        name: '仙台還車',
        type: SpotType.TRANSPORT,
        description: '歸還租車。',
        isPriority: true
      },
      {
        id: 'd5-food-1',
        time: '19:00',
        name: 'すし波奈 (Sushi Hana)',
        type: SpotType.RESTAURANT,
        description: '晚餐：東北壽司 (仙台Parco店)。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sushi+Hana+Sendai+Parco'
      },
      {
        id: 'd5-backup-1',
        time: '候補',
        name: '伊達牛舌本舖',
        type: SpotType.RESTAURANT,
        description: '牛舌料理。'
      }
    ]
  },
  {
    date: '01/18',
    dayOfWeek: 'Day 6',
    weather: { temp: '5°C', condition: '晴空萬里', icon: '☀️' },
    hotel: {
      name: 'APA飯店 輕井澤站前',
      address: '輕井澤站前',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=APA+Hotel+Karuizawa-Ekimae'
    },
    spots: [
      {
        id: 'd6-1',
        time: '11:00',
        name: '仙台媒體中心 (Mediatheque)',
        type: SpotType.SIGHTSEEING,
        description: '伊東豊雄建築名作。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sendai+Mediatheque'
      },
      {
        id: 'd6-2',
        time: '14:31',
        name: '搭乘新幹線往東京',
        type: SpotType.TRANSPORT,
        description: 'Hayabusa 班次 (1.5小時)。',
        cost: '¥11,410',
        isPriority: true
      },
      {
        id: 'd6-3',
        time: '18:04',
        name: '東京轉乘往輕井澤',
        type: SpotType.TRANSPORT,
        description: 'Hakutaka 班次 (1小時)。',
        cost: '¥5,690',
        isPriority: true,
        tips: '抵達輕井澤約 19:07。'
      },
      {
        id: 'd6-food-1',
        time: '19:30',
        name: '村民食堂',
        type: SpotType.RESTAURANT,
        description: '晚餐：信州牛漢堡排。',
        tags: ['星野區'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Sonmin-Shokudo'
      },
       {
        id: 'd6-backup-1',
        time: '候補',
        name: 'Clinton St. Baking',
        type: SpotType.DESSERT,
        description: '特色鬆餅蛋糕。'
      }
    ]
  },
  {
    date: '01/19',
    dayOfWeek: 'Day 7',
    weather: { temp: '-3°C', condition: '降雪機率高', icon: '❄️' },
    hotel: {
      name: '輕井澤王子大飯店 西館',
      address: '輕井澤王子飯店西館',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Hotel+West'
    },
    spots: [
      {
        id: 'd7-1',
        time: '09:00',
        name: '輕井澤王子滑雪場',
        type: SpotType.SIGHTSEEING,
        description: '滑雪 / 雪地徒步活動。',
        cost: '¥10,000 (含裝備)',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Hotel+Ski+Resort'
      },
      {
        id: 'd7-2',
        time: '13:00',
        name: '雲場池',
        type: SpotType.SIGHTSEEING,
        description: '冬季鏡湖雪景。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kumoba+Pond'
      },
      {
        id: 'd7-food-1',
        time: '12:00',
        name: '滑雪場內餐廳',
        type: SpotType.RESTAURANT,
        description: '午餐：簡單熱食。',
        tags: ['方便為主']
      },
      {
        id: 'd7-backup-1',
        time: '候補',
        name: '腸詰屋',
        type: SpotType.RESTAURANT,
        description: '晚餐：德式香腸、自家釀啤酒。'
      },
      {
        id: 'd7-backup-2',
        time: '候補',
        name: '輕井澤燒肉店',
        type: SpotType.RESTAURANT,
        description: '晚餐：燒肉。'
      },
      {
        id: 'd7-backup-3',
        time: '候補',
        name: '丸山咖啡',
        type: SpotType.DESSERT,
        description: '冠軍咖啡。'
      }
    ]
  },
  {
    date: '01/20',
    dayOfWeek: 'Day 8',
    weather: { temp: '-4°C', condition: '持續降雪', icon: '❄️' },
    hotel: {
      name: '輕井澤王子大飯店 西館',
      address: '輕井澤',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Hotel+West'
    },
    spots: [
      {
        id: 'd8-1',
        time: '09:00',
        name: 'Akakura Onsen 滑雪場',
        type: SpotType.SIGHTSEEING,
        description: '全日滑雪體驗。',
        cost: '¥10,000',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Akakura+Onsen+Ski+Area'
      },
      {
        id: 'd8-food-1',
        time: '18:00',
        name: '川上庵 (Kawakami-an)',
        type: SpotType.RESTAURANT,
        description: '晚餐：名物蕎麥麵、炸蝦。',
        tags: ['必吃美食', '排隊名店'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawakami-an+Karuizawa'
      },
      {
        id: 'd8-backup-1',
        time: '候補',
        name: 'Bleston Court Yukawatan',
        type: SpotType.RESTAURANT,
        description: '高級法式料理。'
      }
    ]
  },
  {
    date: '01/21',
    dayOfWeek: 'Day 9',
    weather: { temp: '7°C', condition: '晴朗乾燥', icon: '☀️' },
    hotel: {
      name: 'APA飯店 淺草 田原町站前',
      address: '東京淺草',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=APA+Hotel+Asakusa+Tawaramachi'
    },
    spots: [
      {
        id: 'd9-1',
        time: '09:00',
        name: '舊輕井澤銀座通',
        type: SpotType.SHOPPING,
        description: '復古購物街、聖保羅教堂。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Old+Karuizawa+Ginza+Street'
      },
      {
        id: 'd9-2',
        time: '12:00',
        name: '輕井澤王子購物廣場 (Outlet)',
        type: SpotType.SHOPPING,
        description: '購物行程。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Karuizawa+Prince+Shopping+Plaza'
      },
      {
        id: 'd9-3',
        time: '16:23',
        name: '新幹線回東京',
        type: SpotType.TRANSPORT,
        description: '前往東京站轉地鐵至淺草。',
        cost: '¥6,020',
        isPriority: true
      },
      {
        id: 'd9-4',
        time: '18:00',
        name: '淺草寺 (夜訪)',
        type: SpotType.SIGHTSEEING,
        description: '欣賞夜間點燈，避開人潮。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Senso-ji'
      },
      {
        id: 'd9-food-1',
        time: '12:00',
        name: '輕井澤法國麵包店',
        type: SpotType.RESTAURANT,
        description: '午餐：約翰藍儂愛的麵包店。',
        tags: ['名人推薦'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=French+Bakery+Karuizawa'
      },
      {
        id: 'd9-backup-1',
        time: '候補',
        name: '淺草今半 (國際通本店)',
        type: SpotType.RESTAURANT,
        description: '晚餐：頂級壽喜燒。',
        tags: ['需預約']
      },
      {
        id: 'd9-backup-2',
        time: '候補',
        name: '大黑家天婦羅',
        type: SpotType.RESTAURANT,
        description: '晚餐：天丼。'
      }
    ]
  },
  {
    date: '01/22',
    dayOfWeek: 'Day 10',
    weather: { temp: '5°C', condition: '富士山能見度佳', icon: '🗻' },
    hotel: {
      name: 'APA飯店 淺草 田原町站前',
      address: '東京淺草',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=APA+Hotel+Asakusa+Tawaramachi'
    },
    spots: [
      {
        id: 'd10-1',
        time: '07:30',
        name: '前往河口湖 (方案A)',
        type: SpotType.TRANSPORT,
        description: '淺草 -> 新宿 -> 高速巴士 -> 河口湖。',
        cost: '¥1,900 (巴士)',
        isPriority: true,
        tips: '巴士需事先預約。車程約2小時。'
      },
      {
        id: 'd10-2',
        time: '10:30',
        name: '河口湖遊覽船',
        type: SpotType.SIGHTSEEING,
        description: '仰望富士山。',
        cost: '¥1,000',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Lake+Kawaguchi+Sightseeing+Boat'
      },
      {
        id: 'd10-3',
        time: '11:30',
        name: '富士山全景纜車',
        type: SpotType.SIGHTSEEING,
        description: '天上山公園觀景台。',
        cost: '¥900',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Mt.+Fuji+Panoramic+Ropeway'
      },
      {
        id: 'd10-food-1',
        time: '12:30',
        name: 'ほうとう不動 (河口湖北本店)',
        type: SpotType.RESTAURANT,
        description: '午餐：味噌南瓜餺飥麵。',
        tags: ['必吃鄉土料理'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Hoto+Fudo+Kawaguchiko'
      },
      {
        id: 'd10-4',
        time: '14:00',
        name: '音樂之森美術館',
        type: SpotType.SIGHTSEEING,
        description: '歐式庭園與音樂盒。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawaguchiko+Music+Forest+Museum'
      },
      {
        id: 'd10-backup-1',
        time: '候補',
        name: '湖波 (Konami)',
        type: SpotType.RESTAURANT,
        description: '湖景定食。'
      }
    ]
  },
  {
    date: '01/23',
    dayOfWeek: 'Day 11',
    weather: { temp: '9°C', condition: '晴時多雲', icon: '☀️' },
    hotel: {
      name: 'APA飯店 淺草 田原町站前',
      address: '東京淺草',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=APA+Hotel+Asakusa+Tawaramachi'
    },
    spots: [
      {
        id: 'd11-1',
        time: '08:30',
        name: '前往川越 (小江戶)',
        type: SpotType.TRANSPORT,
        description: '淺草 -> 川越 (東武/JR)。',
        tips: '車程約1小時。',
        isPriority: true
      },
      {
        id: 'd11-2',
        time: '10:00',
        name: '藏造老屋街道',
        type: SpotType.SIGHTSEEING,
        description: '江戶風情建築群。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawagoe+Warehouse+District'
      },
      {
        id: 'd11-3',
        time: '10:30',
        name: '時之鐘',
        type: SpotType.SIGHTSEEING,
        description: '川越地標，每日鳴鐘四次。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Toki+no+Kane'
      },
      {
        id: 'd11-4',
        time: '13:30',
        name: '冰川神社',
        type: SpotType.SIGHTSEEING,
        description: '結緣神社，釣鯛魚籤。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Kawagoe+Hikawa+Shrine'
      },
      {
        id: 'd11-food-1',
        time: '11:30',
        name: '小川菊 (Ogakiku)',
        type: SpotType.RESTAURANT,
        description: '午餐：百年鰻魚飯老店。',
        tags: ['必吃美食', '排隊名店'],
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Ogakiku+Kawagoe'
      },
      {
        id: 'd11-backup-1',
        time: '候補',
        name: '川越 いちのや',
        type: SpotType.RESTAURANT,
        description: '鰻魚飯。'
      },
      {
        id: 'd11-backup-2',
        time: '候補',
        name: '小江戶 Osatsu 庵',
        type: SpotType.DESSERT,
        description: '炸地瓜片 (邊走邊吃)。'
      }
    ]
  },
  {
    date: '01/24',
    dayOfWeek: 'Day 12',
    weather: { temp: '11°C', condition: '晴朗舒適', icon: '✈️' },
    hotel: {
      name: '溫暖的家',
      address: 'Taipei',
      mapUrl: ''
    },
    spots: [
      {
        id: 'd12-1',
        time: '09:00',
        name: '淺草寺 & 仲見世通',
        type: SpotType.SIGHTSEEING,
        description: '最後採買伴手禮。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Nakamise-dori'
      },
      {
        id: 'd12-2',
        time: '10:30',
        name: '唐吉訶德 / 超市',
        type: SpotType.SHOPPING,
        description: '補齊藥妝零食。',
        locationUrl: 'https://www.google.com/maps/search/?api=1&query=Don+Quijote+Asakusa'
      },
      {
        id: 'd12-3',
        time: '11:30',
        name: '搭乘 Skyliner 往機場',
        type: SpotType.TRANSPORT,
        description: '淺草 -> 押上 -> 成田機場。',
        cost: '¥2,700',
        isPriority: true,
        tips: '請預留充裕時間，預計 12:35 前抵達機場。'
      },
      {
        id: 'd12-4',
        time: '14:35',
        name: '搭機返台 (CI101)',
        type: SpotType.TRANSPORT,
        description: 'T2 第二航廈起飛。',
        isPriority: true
      },
      {
        id: 'd12-food-1',
        time: '12:00',
        name: '機場餐廳',
        type: SpotType.RESTAURANT,
        description: '午餐：機場內解決。'
      },
      {
        id: 'd12-backup-1',
        time: '候補',
        name: '人形燒',
        type: SpotType.DESSERT,
        description: '伴手禮。'
      }
    ]
  }
];

export const INITIAL_CHECKLIST = [
  { id: 'c1', text: '護照 (有效期6個月以上)', category: '證件', checked: false },
  { id: 'c2', text: 'Visit Japan Web QR Code (截圖)', category: '證件', checked: false },
  { id: 'c3', text: '駕照日文譯本 (租車用)', category: '證件', checked: false },
  { id: 'c4', text: '台灣駕照正本 (租車用)', category: '證件', checked: false },
  { id: 'c5', text: '機票電子檔 / 訂位代號', category: '交通', checked: false },
  { id: 'c6', text: '西瓜卡 (Suica) / PASMO (手機綁定)', category: '交通', checked: false },
  { id: 'c7', text: '日幣現金 (約 ¥100,000)', category: '錢包', checked: false },
  { id: 'c8', text: '信用卡 (海外高回饋)', category: '錢包', checked: false },
  { id: 'c9', text: '網卡 (eSIM / 漫遊)', category: '通訊', checked: false },
  { id: 'c10', text: '行動電源 & 充電線', category: '電器', checked: false },
  { id: 'c11', text: '個人常備藥品 (感冒/腸胃)', category: '生活', checked: false },
  { id: 'c12', text: '保暖衣物 (發熱衣/手套/毛帽)', category: '衣物', checked: false },
  { id: 'c13', text: '防滑防水鞋 (雪地用)', category: '衣物', checked: false },
];
