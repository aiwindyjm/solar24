import type { Bilingual } from './book-copy';
export type Gesture =
  | 'bud'
  | 'water'
  | 'soil'
  | 'light'
  | 'tea'
  | 'grain'
  | 'shade'
  | 'harvest'
  | 'dew'
  | 'leaf'
  | 'shelter'
  | 'store'
  | 'plum'
  | 'year';
export type LifeProfile = {
  gesture: Gesture;
  labels: readonly [Bilingual, Bilingual, Bilingual];
  listening: Bilingual;
  action: Bilingual;
  instruction: Bilingual;
  stages: readonly [Bilingual, Bilingual, Bilingual];
  memory: Bilingual;
};
const p = (
  gesture: Gesture,
  labels: LifeProfile['labels'],
  listening: Bilingual,
  action: Bilingual,
  instruction: Bilingual,
  stages: LifeProfile['stages'],
  memory: Bilingual,
): LifeProfile => ({ gesture, labels, listening, action, instruction, stages, memory });
// Creative participation prompts, not historical quotations or local farming instructions.
// Factual context and regional provenance come from the existing static editorial snapshot.
export const lifeProfiles: Record<string, LifeProfile> = {
  lichun: p(
    'bud',
    [
      ['水岸 · 初风', 'Water · first breeze'],
      ['枝头 · 待芽', 'Branch · a waiting bud'],
      ['灯下 · 迎春', 'Home · welcome spring'],
    ],
    [
      '让风先抵达，听一段由静到动的春意。',
      'Let a breeze arrive first; listen for a change from stillness.',
    ],
    ['给一枚芽留一点时间', 'Give a bud a little time'],
    ['拖动时间，展开这幅画里的枝芽。', 'Move time to unfold the bud in this drawing.'],
    [
      ['含苞', 'Held closed'],
      ['初展', 'Unfolding'],
      ['新叶', 'New leaf'],
    ],
    ['今年，你最先发现的春意在哪里？', 'Where did you first notice a hint of spring this year?'],
  ),
  yushui: p(
    'water',
    [
      ['水岸 · 听雨', 'Water · rain'],
      ['田间 · 看水', 'Field · water'],
      ['檐下 · 问候', 'Eaves · a greeting'],
    ],
    [
      '把雨声放近一点，听水面由疏到密。',
      'Bring the rain closer and listen to the spaces between drops.',
    ],
    ['一块田，也有不同的水分', 'One field, different amounts of water'],
    [
      '改变画中水位，看看干、润与积水的区别。',
      'Change the drawn water level: dry, moist, then pooled.',
    ],
    [
      ['偏干', 'Dry'],
      ['湿润', 'Moist'],
      ['积水', 'Pooled'],
    ],
    ['下雨时，你最想向谁问一声好？', 'Who comes to mind when rain keeps you indoors?'],
  ),
  jingzhe: p(
    'soil',
    [
      ['岸边 · 微响', 'Bank · a stirring'],
      ['土里 · 初醒', 'Soil · first stirrings'],
      ['窗前 · 新声', 'Window · a new sound'],
    ],
    [
      '轻轻的低鸣与风声，留出想象春雷的空间。',
      'A soft low rumble leaves room to imagine distant spring thunder.',
    ],
    ['把目光移到泥土之下', 'Look beneath the soil'],
    [
      '慢慢移开表土的画层，寻找一线萌动。',
      'Slide back the drawn soil layer and find a small shoot.',
    ],
    [
      ['土层', 'Soil'],
      ['裂隙', 'An opening'],
      ['萌动', 'A shoot'],
    ],
    ['最近，你听见了什么久违的声音？', 'What sound have you heard again after a long absence?'],
  ),
  chunfen: p(
    'light',
    [
      ['水岸 · 和风', 'Water · a gentle wind'],
      ['日影 · 相半', 'Shadow · near balance'],
      ['家中 · 一日', 'Home · one day'],
    ],
    [
      '在风声中停一停，想想白天与夜晚怎样分配生活。',
      'Pause in the breeze and notice how day and night divide your life.',
    ],
    ['在光与暗之间停驻', 'Pause between light and dark'],
    [
      '移动光的分界，停在你喜欢的位置；这是一幅光影画。',
      'Move the boundary of light in this drawing and choose where to pause.',
    ],
    [
      ['偏暗', 'More dark'],
      ['相半', 'Near balance'],
      ['偏明', 'More light'],
    ],
    [
      '今天，你想把白昼留给什么，把夜晚留给什么？',
      'What would you give your daylight to, and what would you keep for the night?',
    ],
  ),
  qingming: p(
    'leaf',
    [
      ['岸边 · 春声', 'Bank · spring sounds'],
      ['柳影 · 踏青', 'Willow · a spring walk'],
      ['灯下 · 思念', 'Home · remembrance'],
    ],
    [
      '听一阵轻风，给想起的人留一点安静。',
      'Listen to a light breeze; leave some quiet for someone you remember.',
    ],
    ['沿一片柳叶走近春天', 'Approach spring through a willow leaf'],
    [
      '展开叶脉，像在散步时慢慢看清一片叶。',
      'Reveal the veins as if noticing a leaf on a slow walk.',
    ],
    [
      ['轮廓', 'Outline'],
      ['叶脉', 'Veins'],
      ['细看', 'Look closely'],
    ],
    [
      '这一季，你想记起哪个人、哪条路？',
      'Which person or path would you like to remember this season?',
    ],
  ),
  guyu: p(
    'tea',
    [
      ['水岸 · 润声', 'Water · soft rain'],
      ['茶边 · 舒叶', 'Tea · unfolding leaves'],
      ['桌边 · 待客', 'Table · a guest'],
    ],
    [
      '让细雨成为背景，把一小段时间留给等待。',
      'Let light rain form a background for a small moment of waiting.',
    ],
    ['看一片茶叶慢慢舒展', 'Watch a tea leaf unfold'],
    [
      '拨动浸润的画面，叶子舒开，水色渐深。',
      'Move through the drawing: leaves open and the water deepens in colour.',
    ],
    [
      ['入水', 'Into water'],
      ['舒叶', 'Unfold'],
      ['茶色', 'Tea colour'],
    ],
    [
      '如果今天泡一杯茶，你想请谁坐一会儿？',
      'If you made tea today, whom would you invite to sit with you?',
    ],
  ),
  lixia: p(
    'shade',
    [
      ['岸边 · 夏声', 'Bank · early summer'],
      ['树下 · 成荫', 'Tree · gathering shade'],
      ['桌边 · 初夏', 'Table · summer begins'],
    ],
    [
      '从风里听初夏，把注意力留给树下的一刻。',
      'Listen for early summer in the wind and pause beneath a tree.',
    ],
    ['让一片树荫慢慢长大', 'Let a patch of shade grow'],
    [
      '移动光影，看树下的留白怎样变凉。',
      'Move the shade and watch the open space beneath the tree change.',
    ],
    [
      ['疏影', 'Sparse shade'],
      ['成荫', 'Canopy'],
      ['歇脚', 'A resting place'],
    ],
    [
      '初夏的一天，你会为自己安排哪一段歇息？',
      'Where would you make room for rest on an early-summer day?',
    ],
  ),
  xiaoman: p(
    'grain',
    [
      ['田边 · 麦风', 'Field · wind in grain'],
      ['麦穗 · 渐满', 'Grain · filling'],
      ['灯下 · 等待', 'Home · waiting'],
    ],
    [
      '听风掠过田野的想象，不急着等一个结果。',
      'Imagine wind passing through a field, without hurrying toward a result.',
    ],
    ['小得盈满，还在途中', 'Filling, still becoming'],
    [
      '让画中的麦粒渐渐饱满，停在尚未成熟之处。',
      'Fill the drawn grains and pause before full ripeness.',
    ],
    [
      ['初成', 'Beginning'],
      ['渐满', 'Filling'],
      ['未熟', 'Not yet ripe'],
    ],
    [
      '有什么事情正在变好，却还不必催它完成？',
      'What is growing well in your life without needing to be finished yet?',
    ],
  ),
  mangzhong: p(
    'harvest',
    [
      ['田边 · 穗响', 'Field · rustling ears'],
      ['田间 · 收种', 'Field · reap and sow'],
      ['桌边 · 一粒', 'Table · a grain'],
    ],
    [
      '细碎的风声，想象收与种之间没有很长的空隙。',
      'Hear a textured breeze and imagine the short pause between harvest and sowing.',
    ],
    ['这一畦收下，下一畦开始', 'One row gathered, another begun'],
    [
      '移动田间分界，看熟穗、留茬与新苗交替。',
      'Move across the field: ripe stalks give way to stubble and new shoots.',
    ],
    [
      ['熟穗', 'Ripe ears'],
      ['留茬', 'Stubble'],
      ['新苗', 'New shoots'],
    ],
    [
      '今天餐桌上的谷物，让你想到谁的劳动？',
      'Whose work comes to mind when you see the grain on your table?',
    ],
  ),
  xiazhi: p(
    'light',
    [
      ['树下 · 长日', 'Tree · long daylight'],
      ['日影 · 留光', 'Shadow · lingering light'],
      ['桌边 · 夏至', 'Table · the solstice'],
    ],
    [
      '让夏日的合成微鸣铺开，听一会儿漫长的白昼。',
      'Let a soft summer hum accompany a moment of long daylight.',
    ],
    ['把傍晚的光留久一点', 'Stay with the evening light'],
    [
      '拨动画里的天光，从午后走向晚照；不表示当地日照时数。',
      'Move the drawn light from afternoon toward evening; this is not a local daylight calculation.',
    ],
    [
      ['午后', 'Afternoon'],
      ['斜照', 'Slanting light'],
      ['晚照', 'Evening glow'],
    ],
    ['如果多留一段天光，你想用它做什么？', 'What would you do with a little more evening light?'],
  ),
  xiaoshu: p(
    'shade',
    [
      ['檐下 · 温风', 'Eaves · warm wind'],
      ['树下 · 午歇', 'Tree · midday rest'],
      ['家中 · 食新', 'Home · a new harvest'],
    ],
    [
      '温风里留一点空白，声音可以很轻。',
      'Leave an open space in the warm breeze; sound can stay quiet.',
    ],
    ['为午后留一片阴凉', 'Make a little shade for the afternoon'],
    ['拉开画中的荫影，让歇脚处逐渐安静。', 'Extend the drawn shade around a place to rest.'],
    [
      ['日光', 'Sunlight'],
      ['半荫', 'Half shade'],
      ['午歇', 'Rest'],
    ],
    [
      '天热时，你会把什么事情挪到清晨或傍晚？',
      'What would you move to morning or evening on a hot day?',
    ],
  ),
  dashu: p(
    'water',
    [
      ['岸边 · 骤雨', 'Bank · summer rain'],
      ['田间 · 水路', 'Field · water paths'],
      ['灯下 · 凉意', 'Home · a little coolness'],
    ],
    [
      '听一段较密的雨，再留意雨声里的间歇。',
      'Listen to denser rain and notice the pauses within it.',
    ],
    ['看水怎样走过田畦', 'Follow water through a field'],
    [
      '拨动水路的开合，观察画中汇聚与疏散。',
      'Open the drawn waterway and watch water gather and spread.',
    ],
    [
      ['汇聚', 'Gather'],
      ['流通', 'Flow'],
      ['舒展', 'Spread'],
    ],
    [
      '盛夏里，哪一个地方让你觉得可以歇下来？',
      'Where do you find a place to pause in high summer?',
    ],
  ),
  liqiu: p(
    'leaf',
    [
      ['岸边 · 晚风', 'Bank · evening breeze'],
      ['叶间 · 初变', 'Leaf · first changes'],
      ['家中 · 盼秋', 'Home · anticipating autumn'],
    ],
    [
      '听晚风，不必急着把余热当成已经离去。',
      'Listen to evening wind without assuming the heat has already gone.',
    ],
    ['只改变一片叶的颜色', 'Notice a change in one leaf'],
    [
      '让一片叶由青向淡金变化；这是画意，不是各地立秋实况。',
      'Shift one leaf from green toward pale gold: an artistic observation, not a forecast.',
    ],
    [
      ['仍青', 'Still green'],
      ['微变', 'A slight change'],
      ['初金', 'A hint of gold'],
    ],
    [
      '你身边最早的一点秋意是什么，也可能还没有？',
      'What is your earliest hint of autumn—or has it not arrived yet?',
    ],
  ),
  chushu: p(
    'harvest',
    [
      ['水岸 · 退暑', 'Water · easing heat'],
      ['田间 · 收留', 'Field · gather and keep'],
      ['檐下 · 早晚', 'Eaves · morning and evening'],
    ],
    [
      '把风声放慢一点，想象清晨与午后不同的温度。',
      'Let the wind soften and imagine the difference between morning and afternoon.',
    ],
    ['收获里，也留着下一季', 'A harvest also holds the next season'],
    [
      '移过一片田，看看收下与留在田里的部分。',
      'Move across the field and notice what is gathered and what remains.',
    ],
    [
      ['在田', 'In the field'],
      ['收下', 'Gathered'],
      ['留种', 'A new beginning'],
    ],
    [
      '最近一次觉得风变凉，是在什么时间、什么地方？',
      'When and where did you last notice a cooler breeze?',
    ],
  ),
  bailu: p(
    'dew',
    [
      ['草边 · 晨静', 'Grass · morning quiet'],
      ['叶尖 · 凝露', 'Leaf tip · dew'],
      ['桌边 · 秋味', 'Table · autumn tastes'],
    ],
    [
      '让低低的风声退远，靠近清晨的安静。',
      'Let the breeze recede and come closer to the quiet of morning.',
    ],
    ['把清晨放在一颗露珠里', 'Hold a morning in a dewdrop'],
    [
      '拖动观察尺度，让叶尖的露珠慢慢显现。',
      'Move closer in the drawing and reveal dew on a leaf tip.',
    ],
    [
      ['叶面', 'Leaf surface'],
      ['微珠', 'Small beads'],
      ['凝露', 'Dew'],
    ],
    [
      '今天清晨，哪一个细节让你停下来多看了一眼？',
      'What small detail made you pause this morning?',
    ],
  ),
  qiufen: p(
    'harvest',
    [
      ['田边 · 秋声', 'Field · autumn sounds'],
      ['田间 · 归仓', 'Field · bringing in'],
      ['桌边 · 谢意', 'Table · gratitude'],
    ],
    [
      '听风走过收获后的空隙，让劳动也进入风景。',
      'Hear the wind in the spaces after harvest, and notice the work behind the view.',
    ],
    ['把一份收获接到下一季', 'Connect a harvest to another season'],
    [
      '从熟穗拨到新苗，看秋收与下一轮准备相接。',
      'Move from ripe ears to shoots and connect gathering with preparation.',
    ],
    [
      ['成熟', 'Ripe'],
      ['收获', 'Harvest'],
      ['接续', 'Continue'],
    ],
    ['这顿饭里，有哪一份劳动值得你说声谢谢？', 'Whose work in this meal would you like to thank?'],
  ),
  hanlu: p(
    'dew',
    [
      ['岸边 · 凉声', 'Bank · cool air'],
      ['草间 · 深秋', 'Grass · deeper autumn'],
      ['窗边 · 看花', 'Window · late flowers'],
    ],
    [
      '风声变轻时，把目光留给深秋仍在发生的生长。',
      'As the breeze quiets, notice the growth that continues in deeper autumn.',
    ],
    ['在冷意中看清一滴水', 'Look closely at a drop in the chill'],
    [
      '靠近画中的草尖，观察露珠；露与霜不是同一种形态。',
      'Look closer at the drawn grass tip: dew and frost are different forms.',
    ],
    [
      ['远看', 'From afar'],
      ['靠近', 'Closer'],
      ['细看', 'In detail'],
    ],
    [
      '别的花渐少时，你附近还有什么在开花？',
      'As other flowers fade, what is still flowering near you?',
    ],
  ),
  shuangjiang: p(
    'leaf',
    [
      ['林边 · 落叶', 'Trees · falling leaves'],
      ['叶脉 · 秋色', 'Leaf veins · autumn colour'],
      ['家中 · 秋藏', 'Home · keeping autumn'],
    ],
    [
      '听风擦过叶面的细响，把秋天读得近一些。',
      'Listen for a dry rustle and read autumn at close range.',
    ],
    ['一片叶，留下深秋的纹路', 'A leaf holds the lines of late autumn'],
    [
      '展开叶脉和色泽，像把一片落叶托在手中。',
      'Reveal veins and colour as if holding a fallen leaf.',
    ],
    [
      ['叶形', 'Shape'],
      ['叶脉', 'Veins'],
      ['秋色', 'Autumn colour'],
    ],
    [
      '如果只留一件东西记住这个秋天，你会选什么？',
      'If you kept one thing to remember this autumn, what would it be?',
    ],
  ),
  lidong: p(
    'store',
    [
      ['檐下 · 入冬', 'Eaves · winter begins'],
      ['屋边 · 收纳', 'Home · gathering in'],
      ['桌边 · 冬味', 'Table · winter tastes'],
    ],
    [
      '让风停在檐外，把屋内的安静听出来。',
      'Let the wind stay outside the eaves and notice the quiet indoors.',
    ],
    ['把日常慢慢收进冬天', 'Gather everyday things into winter'],
    ['将画中的收获从田边移入储物处。', 'Move the drawn harvest from the field into storage.'],
    [
      ['收拢', 'Gather'],
      ['归置', 'Arrange'],
      ['留存', 'Keep'],
    ],
    [
      '你家怎样知道冬天到了：一顿饭，还是一个小习惯？',
      'How does your home mark winter: a meal, or a small habit?',
    ],
  ),
  xiaoxue: p(
    'store',
    [
      ['窗边 · 寒声', 'Window · cold air'],
      ['屋内 · 储菜', 'Home · provisions'],
      ['桌边 · 留味', 'Table · keeping flavour'],
    ],
    [
      '听细小的风声，画面有雪意，也容得下无雪的冬天。',
      'Listen to a small breeze; winter can be here even without snow.',
    ],
    ['让一份收获陪伴更久', 'Let a harvest stay a little longer'],
    [
      '把画中的食物归入储物格，想一想它怎样留到冬日。',
      'Move the drawn provisions into storage and think about keeping a harvest.',
    ],
    [
      ['鲜食', 'Fresh'],
      ['归置', 'Arrange'],
      ['冬储', 'Winter stores'],
    ],
    [
      '你家有什么味道，是为冬天特意留下的？',
      'What taste does your home keep especially for winter?',
    ],
  ),
  daxue: p(
    'shelter',
    [
      ['岸边 · 寒风', 'Bank · winter wind'],
      ['田间 · 覆护', 'Field · winter cover'],
      ['灯下 · 冬藏', 'Home · winter stores'],
    ],
    [
      '让低沉的寒风渐远，听见屋舍与田野之间的空隙。',
      'Let the low winter wind recede; listen to the space between home and field.',
    ],
    ['田野安静，照料仍在', 'A quiet field still needs care'],
    [
      '移动画中的覆盖层，看看覆下仍在的冬苗；不表示实际保温效果。',
      'Move the drawn cover to reveal winter shoots; this does not model insulation.',
    ],
    [
      ['露出', 'Exposed'],
      ['半覆', 'Part covered'],
      ['覆护', 'Covered'],
    ],
    [
      '你的冬天里，哪一份储藏或哪一个人让家变暖？',
      'Which provision or person makes your home feel warmer in winter?',
    ],
  ),
  dongzhi: p(
    'plum',
    [
      ['窗前 · 长夜', 'Window · a long night'],
      ['灯下 · 数九', 'Lamplight · counting nines'],
      ['桌边 · 相聚', 'Table · together'],
    ],
    [
      '在长夜的低声里停驻，给日光将返的方向留一点期待。',
      'Pause in a quiet long night and leave room for returning light.',
    ],
    ['一点一日，把等待画出来', 'One mark, one imagined day'],
    [
      '点染九组九点，体验八十一天的计数；这是消寒计数的当代改编，不自动记录真实日期。',
      'Colour nine groups of nine marks: a contemporary 81-day counting sketch, not a live calendar.',
    ],
    [
      ['初数', 'Begin'],
      ['数九', 'Count the nines'],
      ['待春', 'Toward spring'],
    ],
    [
      '在一年较长的夜里，你想和谁一起吃顿饭？',
      'With whom would you share a meal on a long night of the year?',
    ],
  ),
  xiaohan: p(
    'shelter',
    [
      ['林边 · 冬静', 'Trees · winter quiet'],
      ['枝下 · 避风', 'Branch · shelter'],
      ['桌边 · 热饭', 'Table · a warm meal'],
    ],
    [
      '听稀疏的风声，想象生命怎样在冷天寻找位置。',
      'Listen to a sparse breeze and imagine finding a place in the cold.',
    ],
    ['为细小的生命留一处遮蔽', 'Make room for a little shelter'],
    [
      '移开或放下画中的挡风层，看看露出与遮蔽。',
      'Move the drawn screen to compare exposure and shelter.',
    ],
    [
      ['迎风', 'Exposed'],
      ['半掩', 'Part sheltered'],
      ['避风', 'Sheltered'],
    ],
    [
      '冷天里，你记得哪一碗热饭、哪一次照料？',
      'Which warm meal or act of care do you remember on a cold day?',
    ],
  ),
  dahan: p(
    'year',
    [
      ['岸边 · 岁末', 'Bank · the year turns'],
      ['田间 · 备春', 'Field · preparing spring'],
      ['灯下 · 回望', 'Home · looking back'],
    ],
    [
      '让一段低低的风声收尾，也给新的开始留下空白。',
      'Let a low breeze close the cycle and leave space for a beginning.',
    ],
    ['从这一圈，走向下一圈', 'From this circle to the next'],
    [
      '沿二十四个点回望一年，末尾的新芽指向立春。',
      'Move around twenty-four marks; a new shoot at the end points toward Lichun.',
    ],
    [
      ['回望', 'Look back'],
      ['归整', 'Gather thoughts'],
      ['备春', 'Prepare for spring'],
    ],
    [
      '这一年，你想留下什么，又想从立春继续观察什么？',
      'What would you keep from this year, and keep observing from Lichun?',
    ],
  ),
};

// Sound colours are artistic synthesis parameters, not recordings of these places or species.
export const soundColours = {
  bud: [650, 0.18],
  water: [1500, 0.7],
  soil: [250, 0.14],
  light: [1100, 1.4],
  tea: [1250, 0.5],
  grain: [950, 0.45],
  shade: [800, 1.1],
  harvest: [1050, 0.65],
  dew: [450, 0.2],
  leaf: [1800, 0.85],
  shelter: [260, 0.12],
  store: [340, 0.16],
  plum: [200, 0.1],
  year: [380, 0.15],
} satisfies Record<Gesture, readonly [number, number]>;
