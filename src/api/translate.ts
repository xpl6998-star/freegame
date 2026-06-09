const wordMap: Record<string, string> = {
  // 基础词汇
  free: '免费',
  play: '游戏',
  game: '游戏',
  online: '在线',
  multiplayer: '多人',
  single: '单人',
  players: '玩家',
  mode: '模式',
  story: '故事',
  adventure: '冒险',

  // 游戏类型
  mmorpg: '大型多人在线角色扮演',
  shooter: '射击',
  action: '动作',
  role: '角色',
  playing: '扮演',
  rpg: '角色扮演',
  mmo: '大型多人在线',
  mmofps: '大型多人在线射击',
  fps: '第一人称射击',
  tps: '第三人称射击',
  pvp: '玩家对战',
  pve: '玩家对环境',
  moba: '多人在线竞技',
  battle: '战斗',
  war: '战争',
  fantasy: '奇幻',
  sci: '科幻',
  fiction: '小说',
  'sci-fi': '科幻',
  strategy: '策略',
  simulation: '模拟',
  sports: '体育',
  racing: '赛车',
  combat: '格斗',
  fighting: '格斗',
  survival: '生存',
  horror: '恐怖',
  zombie: '僵尸',
  sandbox: '沙盒',
  open: '开放',
  world: '世界',

  // 游戏内容
  hero: '英雄',
  heroes: '英雄',
  super: '超级',
  universe: '宇宙',
  legendary: '传奇',
  epic: '史诗',
  odyssey: '奥德赛',
  quest: '任务',
  quests: '任务',
  journey: '旅程',
  campaign: '战役',
  missions: '任务',
  mission: '任务',
  objectives: '目标',
  objective: '目标',
  storyline: '剧情',
  plot: '剧情',
  narrative: '叙事',
  lore: '世界观',
  characters: '角色',
  customization: '自定义',
  customize: '自定义',
  create: '创建',
  builder: '建造者',

  // 玩法
  team: '团队',
  based: '基于',
  real: '真实',
  time: '时间',
  'turn-based': '回合制',
  tactical: '战术',
  build: '建造',
  crafting: '制作',
  craft: '制作',
  gather: '采集',
  mining: '采矿',
  farming: '农耕',
  stealth: '潜行',
  ninja: '忍者',
  martial: '武术',
  arts: '艺术',
  combo: '连击',
  skills: '技能',
  skill: '技能',
  abilities: '能力',
  ability: '能力',
  powers: '力量',
  power: '力量',
  spells: '法术',
  spell: '法术',
  magic: '魔法',
  weapons: '武器',
  weapon: '武器',
  armor: '护甲',
  equipment: '装备',
  items: '物品',
  item: '物品',
  loot: '战利品',
  drops: '掉落',
  drop: '掉落',
  chest: '宝箱',
  treasure: '宝藏',

  // PVP/竞技
  competitive: '竞技',
  rank: '排名',
  ranked: '排名',
  league: '联赛',
  leagues: '联赛',
  tournament: '锦标赛',
  tournaments: '锦标赛',
  match: '比赛',
  matches: '比赛',
  arena: '竞技场',
  arenas: '竞技场',
  capture: '夺取',
  flag: '旗帜',
  control: '控制',
  point: '点',
  domination: '统治',
  conquest: '征服',
  siege: '围攻',
  tower: '塔',
  defense: '防御',
  rush: '冲锋',
  death: '死亡',
  search: '搜索',
  destroy: '摧毁',
  enemy: '敌人',
  enemies: '敌人',
  boss: 'Boss',
  bosses: 'Boss',
  monster: '怪物',
  monsters: '怪物',

  // 载具/军事
  vehicle: '载具',
  vehicles: '载具',
  tank: '坦克',
  tanks: '坦克',
  fighter: '战斗机',
  jet: '喷气',
  helicopter: '直升机',
  ship: '船',
  ships: '船',
  submarine: '潜艇',
  battleship: '战列舰',
  carrier: '航母',
  driving: '驾驶',
  car: '汽车',
  cars: '汽车',
  bike: '摩托车',
  bikes: '摩托车',
  motorcycle: '摩托车',
  formula: '方程式',
  rally: '拉力',
  drift: '漂移',
  race: '竞速',
  pilot: '飞行员',
  aviation: '航空',

  // 画面/技术
  realistic: '真实',
  physics: '物理',
  engine: '引擎',
  graphics: '图形',
  stunning: '惊人',
  beautiful: '美丽',
  immersive: '沉浸',
  experience: '体验',
  gameplay: '游戏性',
  controls: '控制',
  intuitive: '直觉',
  challenging: '挑战',
  difficulty: '难度',
  easy: '简单',
  hard: '困难',
  expert: '专家',
  beginner: '新手',
  tutorial: '教程',
  guide: '指南',
  help: '帮助',
  support: '支持',
  community: '社区',
  servers: '服务器',
  server: '服务器',
  network: '网络',
  ping: '延迟',
  lag: '卡顿',
  smooth: '流畅',
  performance: '性能',
  optimization: '优化',
  update: '更新',
  patch: '补丁',
  bug: '漏洞',
  fix: '修复',
  developer: '开发者',
  developers: '开发者',
  publisher: '发行商',

  // 版本/发布
  release: '发布',
  released: '已发布',
  date: '日期',
  beta: '测试',
  alpha: 'Alpha',
  early: '早期',
  access: '访问',
  launch: '上线',
  launched: '已上线',
  global: '全球',
  download: '下载',
  install: '安装',
  requirements: '需求',
  minimum: '最低',
  recommended: '推荐',
  ram: '内存',
  cpu: '处理器',
  gpu: '显卡',
  storage: '存储',
  space: '空间',
  system: '系统',

  // 设置/选项
  settings: '设置',
  options: '选项',
  quality: '质量',
  resolution: '分辨率',
  fullscreen: '全屏',
  windowed: '窗口化',
  vsync: '垂直同步',
  shadows: '阴影',
  effects: '特效',
  textures: '纹理',

  // 社交/公会
  guild: '公会',
  guilds: '公会',
  clan: '氏族',
  clans: '氏族',
  friends: '朋友',
  friend: '朋友',
  party: '队伍',
  chat: '聊天',
  voice: '语音',
  trading: '交易',
  trade: '交易',
  auction: '拍卖',
  market: '市场',
  shop: '商店',
  store: '商店',

  // 等级/成长
  level: '等级',
  levels: '等级',
  leveling: '升级',
  xp: '经验',
  exp: '经验',
  points: '点数',
  stats: '属性',
  strength: '力量',
  agility: '敏捷',
  intelligence: '智力',
  wisdom: '智慧',
  vitality: '体力',
  luck: '幸运',
  prestige: '声望',

  // 货币/消费
  gold: '金币',
  coin: '金币',
  coins: '金币',
  cash: '现金',
  currency: '货币',
  premium: '高级',
  subscription: '订阅',
  vip: 'VIP',
  membership: '会员',
  purchase: '购买',
  buy: '购买',
  sell: '出售',
  cost: '花费',
  price: '价格',
  pay: '支付',
  payment: '支付',

  // 账号/登录
  account: '账号',
  login: '登录',
  logout: '登出',
  register: '注册',
  password: '密码',
  email: '邮箱',
  username: '用户名',
  profile: '资料',
  avatar: '头像',
  sync: '同步',
  cloud: '云端',

  // 控制方式
  platform: '平台',
  platforms: '平台',
  console: '主机',
  controller: '手柄',
  keyboard: '键盘',
  mouse: '鼠标',
  touch: '触屏',
  mobile: '移动端',
  pc: '电脑',

  // 特色玩法
  royale: '大逃杀',
  'battle royale': '大逃杀',
  hunger: '饥饿',
  'hunger games': '饥饿游戏',
  last: '最后',
  standing: '存活',
  infected: '感染',
  vampire: '吸血鬼',
  werewolf: '狼人',
  dinosaur: '恐龙',
  dragon: '龙',
  pirate: '海盗',
  medieval: '中世纪',
  historical: '历史',
  cybernetic: '赛博朋克',
  cyber: '黑客',
  neon: '霓虹',

  // 其他常见词
  start: '开始',
  begin: '开始',
  pause: '暂停',
  resume: '继续',
  quit: '退出',
  exit: '退出',
  save: '保存',
  load: '加载',
  menu: '菜单',
  hud: '界面',
  minimap: '小地图',
  map: '地图',
  inventory: '背包',
  bag: '背包',
  equip: '装备',
  unequip: '卸下',
  use: '使用',
  combine: '合成',
  stack: '堆叠',

  // 状态效果
  health: '生命',
  hp: '生命值',
  mana: '魔法',
  mp: '魔法值',
  stamina: '体力',
  thirst: '口渴',
  poison: '中毒',
  buff: '增益',
  debuff: '减益',
  stun: '眩晕',
  freeze: '冰冻',
  burn: '燃烧',
  slow: '减速',
  boost: '加速',
  shield: '护盾',

  // 地牢/副本
  dungeon: '副本',
  dungeons: '副本',
  raid: '团本',
  raids: '团本',
  instance: '副本',
  instances: '副本',
  elite: '精英',
  rewards: '奖励',
  reward: '奖励',
  bonus: '奖励',
  daily: '每日',
  weekly: '每周',
  monthly: '每月',
  event: '活动',
  events: '活动',

  // 时间相关
  seasonal: '赛季',
  season: '赛季',
  reset: '重置',
  timer: '计时器',
  cooldown: '冷却',
  duration: '持续时间',
  ongoing: '进行中',
  upcoming: '即将推出',
  new: '新',
  latest: '最新',
  hot: '热门',
  trending: '热门',
  popular: '热门',
  top: '排行',
  best: '最佳',
};

function simpleTranslate(text: string): string {
  if (!text) return '';
  let result = text;

  const sortedKeys = Object.keys(wordMap).sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    result = result.replace(regex, wordMap[key]);
  }

  result = result.replace(/\s+/g, ' ').trim();

  return result;
}

const cache: Record<string, string> = {};

export async function translate(
  text: string,
  fromLang = 'en',
  toLang = 'zh'
): Promise<string> {
  if (!text.trim()) return text;

  const cacheKey = `${fromLang}:${toLang}:${text}`;
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url, {
      signal: AbortSignal.timeout(3000),
    });

    if (response.ok) {
      const data = await response.json();
      const translated = Array.isArray(data) ? data[0]?.[0]?.trim() : '';
      if (translated && translated !== text) {
        cache[cacheKey] = translated;
        return cache[cacheKey];
      }
    }
  } catch {
    // fallback to simple translation
  }

  cache[cacheKey] = simpleTranslate(text);
  return cache[cacheKey];
}

export async function translateGameField(
  text: string,
  isZh: boolean
): Promise<string> {
  if (!isZh || !text.trim()) return text;
  return translate(text, 'en', 'zh');
}