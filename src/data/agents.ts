export const agents = [
  {
    id: 'asher',
    team: 'ALPHA',
    designation: 'ALPHA-1',
    name: 'Asher W. Shepherd',
    callsign: 'Nocturne',
    age: 29,
    dob: '19XX-04-08',
    nationality: 'UK',
    role: 'Team Leader',
    position: 'Commander / Pointman',
    clearance: 'LEVEL 5',
    image: 'https://i.postimg.cc/BbBZrQXh/imiji-0003-leieo-2.jpg', // ■asher■
    stats: { height: '191cm', weight: '98kg', vision: '20/15', blood: 'B-POS', footSize: 'UK10.5', smoking: 'Yes', allergy: 'Peach' },
    appearance: 'Light brown hair, dark brown eyes. Handsome, 191cm muscular build. Exudes a relaxed, detached aura.',
    outside: 'SIG Sauer MCX RATTLER',
    inside: 'Avoids emotional involvement and serious relationships. Keeps distance due to fear of loss, masking a subtle underlying loneliness.',
    speech: 'Speaks with a relaxed dominance. Uses assertive, definitive statements and subtle commands. Omits explanations in favor of notifications. Hides true emotions.',
    traits: '흡연자. 전직 SAS 출신. 명망 있는 가문의 후계자였으나 14세에 부모를 여의었다.',
    notes: `애셔는 전형적인 명문가 출신 엘리트로, 뛰어난 피지컬과 타고난 리더십으로 상황을 설계하고 통제한다. 그의 주변에는 항상 미묘한 긴장감이 감돈다. 이는 그가 의도한 것이라기보단 타인들이 애셔 특유의 여유로움과 침착함에 압도되어 느끼는 선망에 가깝다. 그는 무리 속에 섞여 있어도 홀로 선명하게 도드라지며, 별다른 노력 없이도 자연스럽게 공간의 중심을 차지한다. 마치 그러기 위해 태어난 사내인 것처럼.\n\n그런 그에게도 근원적인 나약함이 있고, 그것은 애셔로 하여금 내면 깊은 곳에 감정적 요새를 쌓게 했다. 예기치 못한 상황에 대한 대처 능력이 뛰어나다는 것은 역설적으로 그가 항상 모든 변수를 계산하고 긴장 상태를 유지하고 있다는 방증이니까. 그는 언제나 철저히 자신을 통제하며, 자신의 예민함을 날카롭게 벼려둔다.\n\n그리고 이 '완벽한' 남자는, 스스로도 깨닫지 못한 채 기다리고 있다. 어느 날 누군가 그 문을 아무렇지도 않게 열고 들어와, 열 네 살에 고집스레 숨겨버린 자신의 두려움을 들여다 봐주기를.`,
    easterEggs: {
      fileNo: 'University of Oxford, BA in 국제관계학. 6년 간 SAS 복무.',
      codename: 'SAS 신병 시절, 야간 작전 도중 기척도 없이 최단 시간에 적진으로 진입하는 기록을 세웠다. 이후 붙여진 콜사인이 \'야상곡\'. 본인은 그 콜사인을 내심 마음에 들어한다.',
      photo: '연갈색 머리, 진갈색 눈동자, 그야말로 \'남자답게 잘생겼다\'는 표현이 어울리는 뚜렷한 이목구비. 물론 애셔도 자신의 매력을 잘 알고 있다.'
    }
  },
  {
    id: 'max',
    team: 'ALPHA',
    designation: 'ALPHA-2',
    name: 'Max Rogers',
    callsign: 'Grizzly',
    age: 30,
    dob: '19XX-12-24',
    nationality: 'USA',
    role: 'Operative',
    position: 'Heavy Weapons / Breacher',
    clearance: 'LEVEL 5',
    image: 'https://i.postimg.cc/JndStfvf/imiji-0000-leieo-5.jpg', // ■max■
    stats: { height: '193cm', weight: '105kg', vision: '20/15', blood: 'O-NEG', footSize: 'US13', smoking: 'No', allergy: 'Pollen' },
    appearance: 'Short black hair, light brown eyes. Sharp, intimidating look. 193cm, heavily scarred muscular build. Cold and taciturn atmosphere.',
    outside: 'FN SCAR-H / customized M870 shotgun',
    inside: 'Suppressed warmth. Introverted, delicate, and gentle. Prefers action over words. Low self-esteem leads to self-objectification. Solitary.',
    speech: 'Prefers silence. Speaks little. Lacks eloquence (accepts misunderstandings without explaining). Relies on non-verbal communication.',
    traits: '비흡연자. 고아원 출신. 타고난 신체 능력(민첩성, 뛰어난 근접 전투력)을 보유하고 있다. 체온이 높은 편이다.',
    notes: `맥스는 마치 감정이 거세된 기계처럼 보인다. 위협적인 체구와 훈련된 기술적 노련함은 일견 위압적이지만, 그는 언제나 그림자 속에 고요하게 잠기는 편을 택한다. 항상 무표정한 얼굴과 극도로 절제된 표현은 그 자체로 '접근 금지' 신호. 그는 그저 잔존했기에 존재하고, 가능하기에 기능할 뿐이다.\n\n어쩌면 그에게도 영혼이라 부를만한 것이 있었을 것이다. 그가 꽃을 보며 아름답다고 느낄 수 있었던 순간들. 아이들의 웃음소리를 악몽이 아닌 평범한 오후에 들어 넘길 수 있었던 날들. 그러나 그것은 몇 발의 폭격에 휘말려 사라졌고, 그에게 남은 것은 그 자신을 벌하려는 혐오감이 전부였다.\n\n사내는 모든 것이 무너진 폐허 속에서 아직도 무언가를 지키고 있다. 마치 죄책감처럼. 혹은, 그저 오래된 관성처럼.`,
    easterEggs: {
      fileNo: '그린베레의 전도유망한 대위였다. 그 악몽같은 일이 벌어지기 전까지는.',
      codename: '군 시절, 안개가 짙은 날 숲 속을 행군하다가 그의 실루엣을 곰으로 오인한 민간인들에게 총에 맞을 뻔한 적이 있었다. 이후 부대원들이 놀리듯 부르게 된 별명.',
      photo: '짧게 정리한 검은 머리, 빛을 받으면 금빛처럼 보이는 연갈색 눈동자, 날카롭고 위압적인 인상. 온 몸에 오래된 흉터가 많다.'
    }
  },
  {
    id: 'oscar',
    team: 'ALPHA',
    designation: 'ALPHA-3',
    name: 'Oscar S. Miller',
    callsign: 'Scissors',
    age: 27,
    dob: '19XX-10-29',
    nationality: 'USA',
    role: 'Operative',
    position: 'Designated Marksman / EOD Technician',
    clearance: 'LEVEL 4',
    image: 'https://i.postimg.cc/FH4F9SjF/imiji-0002-leieo-3.jpg', // ■oscar■
    stats: { height: '187cm', weight: '87kg', vision: '20/15', blood: 'A-POS', footSize: 'US11', smoking: 'Yes', allergy: 'Peanuts' },
    appearance: 'Blonde hair, light green eyes. Delicately handsome. 187cm, lean muscular build. Eye smiles. Sluggish, fox-like atmosphere.',
    outside: 'M110 Semi-Automatic Sniper System (SASS)',
    inside: 'Cold and sharp. Strategic thinker. Avoids serious relationships. Emotional self-doubt ("I might ruin the relationship").',
    speech: 'Soft and affectionate. Flows naturally with excellent improvisation. Avoids unnecessarily deep conversations.',
    traits: '양성애자. 흡연자. 주량이 매우 세다. 팀의 분위기 메이커 역할을 하며, 가벼운 만남을 즐긴다. 무신론자이다.',
    notes: `오스카는 전장보다 파티장이 더 어울려 보이는 남자다. 사람을 홀리는 듯한 특유의 눈빛과 능숙한 언변, 별로 노력하지 않아도 상대의 경계를 허무는 존재감. 그는 자신의 외모와 화술이 타인에게 어떤 영향을 미치는지 정확히 인지하고 있으며 이를 체스 말처럼 사용한다. 모두가 그 빛에 이끌려 가까이 다가가지만 정작 그 누구도 곁에 두지 않는다. 그는 누구도 믿지 않으니까.\n\n그의 공허함은 과거의 어느 지점에서 기인했다. 그는 뿌리내릴 곳 하나 가져본 적 없는 남자였고, 그것이 주는 불안과 취약함을 빛나는 웃음과 농담, 하룻밤짜리 온기로 덮기로 마음먹었다. 같은 상대를 두 번 만나지 않으며 제 스스로 혼자 남기를 자처했다. \n\n어쩌면 그는 무너지는 순간 조차 고집스럽게도 홀로 \'유쾌\'하기를 바랄지도 모른다. 어차피 사랑이나 안정같은 건 존재하지 않는 환상이라 여길테니.`,
    easterEggs: {
      fileNo: '3년간 SAS 복무. 후안이 직접 스카웃. 영국인이었으나 미국으로 귀화했다.',
      codename: 'SAS 시절, 반군에게 생포되었으나 사무용 가위로 3명을 제압하고 자력으로 탈출한 뒤 붙은 칭호. 본인은 은근히 성적인 농담으로 써먹는다.',
      photo: '밀밭처럼 밝은 금빛 머리, 연두빛 눈동자, 섬세한 이목구비의 아름다운 미남. 요원보다 배우가 어울리는 인상.'
    }
  },
  {
    id: 'eric',
    team: 'ALPHA',
    designation: 'ALPHA-4',
    name: 'Erick S. Mendez',
    callsign: 'Reaper',
    age: 25,
    dob: '19XX-01-03',
    nationality: 'USA',
    role: 'Operative',
    position: 'Rifleman',
    clearance: 'LEVEL 4',
    image: 'https://i.postimg.cc/BvhJcwR1/imiji-0001-leieo-4.jpg', // ■eric■
    stats: { height: '188cm', weight: '95kg', vision: '20/20', blood: 'B-POS', footSize: 'US11', smoking: 'Yes', allergy: 'None' },
    appearance: 'Dark brown hair, deep red eyes. Rebellious handsome look. 188cm, well-proportioned muscular build. Ear piercings. Fierce and sexy vibe.',
    outside: 'Heckler & Koch HK416',
    inside: 'Wary of emotional involvement. Realistic thinker. Subtle playfulness and slight shyness. Blind loyalty and a desire for recognition.',
    speech: 'Direct and assertive. Cynical sarcasm and mocking humor. Rough speech mixed with Spanish curses. Hides true feelings.',
    traits: '스페인계 미국인. 헤비 스모커. 슬럼가 출신으로 3년간 군 복무를 했다. 연애 경험이 부족하며, 능숙한 척하지만 실제로는 서투르다.',
    notes: `에릭은 길바닥에서 태어나 오직 자신의 가치를 증명하기 위해 피를 흘리며 자랐다. 그 치열한 승부욕과 굶주림이 그를 '블랙오버 최연소 알파팀'이라는 자리까지 밀어올렸으나, 그는 여전히 누군가에게 인정받고자 발버둥친다.\n\n겉보기엔 통제 불능의 맹수 같지만, 그는 결코 무리에서 이탈하지 않는다. 그의 과도한 공격성은 스스로 절대 인정하지 않는 내면의 결핍을 먹으며 자라났다. 가족에도, 갱단에도, 군대에도 온전히 속하지 못했던 그는 역설적으로 누구보다 소속감을 갈망하며 자신의 영역을 맹목적으로 방어하려 든다.\n\n사람들은 종종 그를 \'미친개\'라 부르며 두려워한다. 하지만 그 사나운 이빨 뒤에는 그저 누군가에게 안기고 싶어하는 외로운 들개가 웅크리고 있을지 모른다.`,
    easterEggs: {
      fileNo: '3년간 미 육군에서 복무, 상관이 짜증나서 뛰쳐나온 후 블랙오버에 지원했다.',
      codename: '신병 시절, 적군을 제거하고 인질을 구출하려 다가갔지만 인질들이 에릭을 보고 경기하며 기절해버렸다. \'그 남자가 더 사신 같았다\'는 추후 증언때문에 붙은 별명.',
      photo: '짙은 흑갈색 머리, 검붉은 눈동자, 섹시하고 사나운 인상. 주렁주렁 달린 피어싱과 옅은 다크서클 때문에 더 퇴폐적으로 보인다.'
    }
  },
  {
    id: 'nathan',
    team: 'BETA',
    designation: 'BETA-1',
    name: 'Nathan Wolf',
    callsign: 'Daddy',
    age: 30,
    dob: '19XX-05-22',
    nationality: 'USA',
    role: 'Team Leader',
    position: 'Commander / SAW Gunner',
    clearance: 'LEVEL 5',
    image: 'https://i.postimg.cc/QMNTdwpb/seukeulinsyas-2026-03-02-235309-png-0007-leieo-6.jpg', // ■nathan■
    stats: { height: '192cm', weight: '103kg', vision: '20/15', blood: 'O-POS', footSize: 'US13', smoking: 'Yes', allergy: 'None' },
    appearance: 'Black hair, deep blue eyes. Fierce, wild impression. 190cm, thick muscular build. Decadent atmosphere.',
    outside: 'M249E4 SAW',
    inside: 'Suppressed wildness. Almost animalistic sharp intuition and instincts. Strategic coldness. Unstable emotional state and defense mechanisms. Tenacious.',
    speech: 'Skillful speaker who naturally takes the upper hand. Sly and slow. Mixes jokes with commands. Assertive. Informal, comfortable tone.',
    traits: '7년간 네이비씰 복무, 전역 후 블랙오버에 지원했다.',
    notes: `네이슨은 황량한 트레일러 촌에서 태어나 시스템의 가장 밑바닥인 위탁 가정과 그룹홈을 전전하며 자랐다. 소년에게 삶이란 주어지는 것이 아니라 쟁취하고 지켜내야 하는 끝없는 전쟁이었다. 그리하여 그는 여유라는 사치를 가져본 적이 없다. 그저 흉내낼 뿐.\n\n그는 겉보기에 세상 태평한 탕아처럼 보인다. 느긋한 농담을 던지고 누구와도 쉽게 어울린다. 하지만 그 웃음 뒤에는 곤두선 본능이 들끓고 있다. 그는 자신의 영역 안에 들어온 모든 것들에 대해 병적으로 집착하고 유지하려 한다. 그것이 동료든, 연인이든, 혹은 사소한 물건이나 조직의 체계이든. 자신이 보호하고 있는 가치에 대한 도전은 즉시 적의로 간주한다.\n\n어쩌면 그는 평생을, 8살 그날 밤 지키지 못했던 어머니의 비명 소리로부터 도망치고 있는지도 모른다. 그래서 사내는 제 손아귀에 들어온 것을 놓을 줄 모른다. 다시는 아무것도 빼앗기지 않기 위해서.`,
    easterEggs: {
      fileNo: '7년 간 네이비씰 복무, 전역 후 블랙오버에 지원했다.',
      codename: '군 복무 시절, \'키드\'라는 전우를 들쳐업고 2km를 기어 전장을 빠져나온데서 유래. 침대에서 그렇게 불리면 흥분한다.',
      photo: '짧게 깎은 검은 머리, 남청색 어두운 눈동자, 사나운 눈매에 짙은 눈썹. 맹수처럼 위험한 분위기.'
    }
  },
  {
    id: 'vincent',
    team: 'BETA',
    designation: 'BETA-2',
    name: 'Vincent Klein',
    callsign: 'Goodboy',
    age: 28,
    dob: '19XX-08-27',
    nationality: 'Australia',
    role: 'Operative',
    position: 'Rifleman',
    clearance: 'LEVEL 4',
    image: 'https://i.postimg.cc/bYnspp78/imiji-(6).jpg', // ■vincent■
    stats: { height: '188cm', weight: '97kg', vision: '20/20', blood: 'A-POS', footSize: 'US11', smoking: 'Yes', allergy: 'None' },
    appearance: 'Slightly curly blonde hair, blue eyes. Good-natured handsome look. 188cm, muscular build. Drooping outer eye corners, eye smiles.',
    outside: 'Heckler & Koch HK416',
    inside: 'Sincere and loyal. Combines strategic thinking with humanitarian methods. Foolishly accepting, laughs things off. Avoids deep relationships.',
    speech: 'Good manners. Kind and honest. No dark spots. Good listener. Carefully refined statements.',
    traits: '3년간 제2코만도연대 복무, 전역 후 블랙오버에 지원했다.',
    notes: `빈센트는 모두에게 사랑받는 남자다. 선하고 온화한 미소, 어디에나 자연스레 섞이는 사교성, 그리고 누구에게나 베푸는 사소한 친절 덕분에 그는 항상 환영받는다. 그의 콜사인은 단순히 농담이 아니라 그를 설명하는 가장 완벽한 단어일 것이다. 아니, 적어도 겉으로는 그렇게 보인다.\n\n그는 모두와 함께 있을때만 비로소 웃는 남자다. 평생 사랑했던 어머니의 그늘 아래, 그는 평생 \'착한 아이\'로 남기 위해 자신을 무수히 깎아내렸다. 그는 거절하고 싶었던 수많은 요청에 응해야만 했고, 미소짓지 않고 싶었던 많은 순간에 굿 보이가 되어야 했다. 그는 언제나 사랑 속에 살면서, 한 번도 사랑을 받아본 적은 없었다.\n\n그는 종종 홀로 어머니의 묘를 찾는다. 그 앞에 꽃을 내려두고는 물끄러미 바라보며 상념에 잠기는 것이다. 그런 순간이면 남자는 웃지 않는다. 그럴때 비로소, 그는 낯선 얼굴로 참았던 숨을 토해내곤 한다.`,
    easterEggs: {
      fileNo: '3년간 제2코만도연대 복무, 전역 후 블랙오버에 지원했다.',
      codename: '신병 시절 \'착해빠진\' 성격 때문에 애완견처럼 불리던 멸칭. 하지만 그가 목숨 걸고 부대원들을 구한 이후부터는 애정어린 별명이 되었다.',
      photo: '살짝 곱슬기가 있는 금발, 새파란 눈동자, 쳐진 눈꼬리에 선한 인상의 미남.'
    }
  },
  {
    id: 'raul',
    team: 'BETA',
    designation: 'BETA-3',
    name: 'Raul Hayes',
    callsign: 'Pulse',
    age: 27,
    dob: '19XX-07-08',
    nationality: 'USA',
    role: 'Operative',
    position: 'Pointman',
    clearance: 'LEVEL 4',
    image: 'https://i.postimg.cc/t4p1Bwv8/imiji-(7).jpg', // ■raul■
    stats: { height: '186cm', weight: '85kg', vision: '20/15', blood: 'A-NEG', footSize: 'US10.5', smoking: 'Yes', allergy: 'None' },
    appearance: 'Light brown hair, dark gray eyes. Prickly handsome look. 186cm, slim but muscular build. Sophisticated atmosphere.',
    outside: 'Mk. 18 CQBR',
    inside: 'Delicate observation skills. Simple mood swings. Sulks easily. Annoyance and caring coexist. Prefers cute things. Narrow attachment style (childish possessiveness, secret jealousy).',
    speech: 'Slightly grumbly. Unhesitating swearing. Sociable friendliness. Sly calmness. Good at improvising.',
    traits: '헤비 스모커. 3년간 군 복무를 했다. 패션 감각이 뛰어나다.',
    notes: `라울은 평범하고 화목한 가정에서 사랑받으며 자란 전형적인 막내다. 까칠하고 날 선 태도, 툭하면 내뱉는 불평불만은 얼핏 그를 성격 나쁜 반항아처럼 보이게 한다. 하지만 정확히 말해서, 그는 \'반항아 지망생\'이다. 그의 예민함은 섬세한 관찰력의 다른 이름이며, 날 선 혀 끝에는 언제나 미묘한 애정이 묻어있다. 물론 그가 죽도록 인정하기 싫은 부분이지만.\n\n그렇다. 그가 가진 가장 큰 비밀은 사랑에 대한 환상이다. 다정한 가정에서 자란 탓에 그는 내심 운명적이고 낭만적인 연애를 꿈꾼다. 하지만 냉혹한 전장에서, 거친 사내들 사이에서 이런 속내를 들키는 것은 향후 50여년 간의 조롱을 낙찰받는 것과 같은 일이다. 그래서 그는 일부러 가벼운 연애를 반복하고 가시 돋친 태도를 취한다. 제 귀 끝이 발갛게 달아오르는 것도 모르고.\n\n그는 고향 집에 돌아가면 아직도 누나들에게 하찮은 취급을 받는다. 그런 그가 겪는 죽음의 무게들은 알게 모르게 그의 영혼에 상처를 입히고 있다. 그는 언제쯤 그걸 깨닫게 될까?`,
    easterEggs: {
      fileNo: '3년간 미 육군에서 복무, 전역 후 블랙오버에 지원했다.',
      codename: '군 시절 입을 다물고도 \'눈깔로\' 하극상을 하던 놈이었다. 저 새끼 언제 터질지 모른다는 뜻으로 붙은 별명.',
      photo: '연갈색 머리, 안개같은 회색 눈동자, 살짝 올라간 눈매에 까칠하고 예민한 인상.'
    }
  },
  {
    id: 'isaac',
    team: 'BETA',
    designation: 'BETA-4',
    name: 'Isaac Donovan',
    callsign: 'Orca',
    age: 29,
    dob: '19XX-07-04',
    nationality: 'USA',
    role: 'Operative',
    position: 'Breacher / Rifleman',
    clearance: 'LEVEL 4',
    image: 'https://i.postimg.cc/zGxf0BgW/imiji-(5).jpg', // ■isaac■
    stats: { height: '187cm', weight: '96kg', vision: '20/20', blood: 'O-NEG', footSize: 'US11', smoking: 'No', allergy: 'Shellfish' },
    appearance: 'Blonde hair, black eyes. Flashy, handsome look. 187cm, balanced muscular build. Dark skin, heavily tattooed. Indifferent, cool vibe.',
    outside: 'Heckler & Koch HK416 (with a custom-modified under-barrel shotgun attachment)',
    inside: 'Kind but eccentric. Accepts things easily as he pleases (no bad intentions, just finds worrying bothersome). Proposes unique solutions. Healthy mentality, high self-esteem.',
    speech: 'Direct and honest. Surprisingly affectionate. Rarely swears. Chuckles when amused.',
    traits: '비흡연자. 4년간 군 복무를 했다. 상황 판단력이 매우 뛰어나다.',
    notes: `아이작은 마치 세상의 모든 근심을 강 건너 불구경하듯 관조하며 살아가는 남자다. 좋은게 좋은 것이라는 그의 굳건한 마인드는 그를 속 편한 낙천주의자로 보이게 한다. 탄환이 빗발치는 전장에서도, 사선을 넘나드는 부상 상황에도 그는 아무 걱정이 없는 것처럼 보인다. 그의 까만 눈은 언제나 희망의 방향을 향하니까.\n\n그러나 때로 그는 \'그렇게 살기 위해\' 노력한다. 너무 일찍 어른이 되어버린 소년은 여동생의 작은 손을 놓쳤던 그 순간을 생생하게 기억하고 있다. 집이라 여겼던 곳이 서서히 바스라지는 것을, 영리했던 아이는 그저 감내하고 받아들여야 했다. 그렇게 쌓아 온 성벽이었다. 그 어떤 괴로운 것도 뚫고 들어오지 못하는 감정적 보호소. 그 곳의 다른 이름은 감옥이기도 했다.\n\n그는 이제 절대로 뒤돌아보지 않는 남자가 되었다. 양부모님의 집에서 한밤 중에 도망치듯 떠날 때도 그랬고, 군 시절 죽은 전우의 식은 몸을 두고 퇴각할 때도 그랬다. 그의 덤덤한 미소 뒤에는 여전히 그 날의 어린 소년이 서 있다.`,
    easterEggs: {
      fileNo: '4년간 제75레인저연대 복무, 이후 블랙오버에 지원했다.',
      codename: '군 시절, 멀쩡하게 생겨선 작전만 나가면 세상 무서워져서 붙은 별명. 범고래처럼 \'외모와 달리 지랄같다\'는 뜻이다.',
      photo: '밝은 금발, 유독 새카만 눈동자, 짙은 피부에 문신이 많다. 퇴폐적이고 날티나는 인상.'
    }
  },
  {
    id: 'blake',
    team: 'SUPPORT',
    designation: 'SUPPORT-1',
    name: 'Blake Neal',
    callsign: 'Baron',
    age: 32,
    dob: '19XX-11-01',
    nationality: 'UK',
    role: 'Team Leader',
    position: 'Commander / Combat Medic',
    clearance: 'LEVEL 5',
    image: 'https://i.postimg.cc/zvYDVH9P/imiji-(4).jpg', // ■blake■
    stats: { height: '188cm', weight: '94kg', vision: '20/40', blood: 'O-POS', footSize: 'UK10', smoking: 'No', allergy: 'None' },
    appearance: 'Brown hair, deep green eyes. Cold handsome look. 188cm, balanced muscular build. Sensitive and chilling atmosphere.',
    outside: 'Heckler & Koch HK416',
    inside: 'Generally peaceful (grown and dulled through vast experience). Sense of calling. Unconscious cynical sense of humor. Expects little from everything.',
    speech: 'Habitually uses formal language with everyone. Monotone without inflection. Assertive and definitive. Only speaks facts.',
    traits: '비흡연자. 전직 군의관 출신. 평소에는 무테 안경을 착용한다(작전 중에는 콘택트렌즈 착용).',
    notes: `블레이크는 죽음을 다루는 사내였다. 타인을 죽이기 위해 혈안이 된 전장에서 유일하게 역행하던 삶. 그는 메스를 든 외과의로, 지금은 총을 든 필드 메딕으로 생과 사의 경계선 가장 가까운 곳에 서 있다. 그것이 의미하는 바는 명확하다. 그에게 죽음이란 그저 반복되는 현상과 같다는 것. 그에게 어떤 사람의 마지막 기억이란 그 사람이 웃던 얼굴 보다는 그의 끊어진 장기나 치솟는 피 같은 것이었다.\n\n그것이 그를 지금의 모습으로 만들었다. 그는 한 사람이 죽기 직전인 순간에조차 긴장하지 않는다. 그 기이한 평온감이 역설적으로 그를 좋은 의사로 만들었다. 사내는 자신이 영영 마취 되었다고 느꼈다. 틀린 말은 아닐 것이다.\n\n그는 타인에게 삶과 미래를 기대하지 않는다. 아무것도 기대하지 않는다는 것은 더 이상 상처받지 않겠다는 선언이기도 하다. 그의 더 없이 차분하고 안정적인 외면과 부드러운 언행 아래에서, 그는 그저 고요하게 기다린다. 언젠가 자신을 다시 \'두렵게\' 만들 누군가를.`,
    easterEggs: {
      fileNo: 'RAMC소속, 16공중강습여단 파견 군의관 출신, 제대 후 후안이 직접 스카웃.',
      codename: '별다른 설명이 필요없다. 그냥 \'남작님\'같은 분위기와 성격, 행동. 본인은 자길 뭐라고 부르든 별로 신경쓰지 않는다.',
      photo: '느슨하게 빗어넘긴 갈색 머리, 짙은 녹색 눈동자, 서늘하고 차분한 분위기. 길고 우아한 손가락. 작전에 나가지 않을때는 안경을 쓴다.'
    }
  },
  {
    id: 'jay',
    team: 'SUPPORT',
    designation: 'SUPPORT-2',
    name: 'Jay Benson',
    callsign: 'Gentleman',
    age: 29,
    dob: '19XX-07-13',
    nationality: 'USA',
    role: 'Operative',
    position: 'Human-Factor Specialist',
    clearance: 'LEVEL 4',
    image: 'https://i.postimg.cc/FsmsvcbP/imiji-(3).jpg', // ■jay■
    stats: { height: '187cm', weight: '93kg', vision: '20/20', blood: 'A-POS', footSize: 'US11', smoking: 'Yes', allergy: 'None' },
    appearance: 'Blonde hair, light blue eyes. Neatly groomed handsome look. 187cm, balanced muscular build. Soft and relaxed atmosphere.',
    outside: 'Heckler & Koch HK416',
    inside: 'Intentionally blocks emotional empathy (just acting on the outside, not a sociopath). Pursues efficiency. Contemplative. Dogmatic judgment.',
    speech: 'Well-mannered formal language. Skillful eloquence. Considerate word choice. Light jokes.',
    traits: '흡연자. 전직 프로파일러 출신. 항상 깔끔한 복장을 유지한다.',
    notes: `제이는 소총을 든 전장의 신사이다. 그는 죽음을 의도해 격발하면서도 필요할 때면 부드럽게 미소지을 수 있도록 훈련받았다. 호감을 얻는 외모와 나긋하고 듣기 좋은 목소리. 감정이 요동칠 법한 극한 상황에서도 맥박 하나 흐트러지지 않는 평정심. 그는 현장에서 협상가, 대인 담당자가 갖추어야 할 모든 재능을 가지고 있다.\n\n기실 그 재능은 \'결핍\'의 다른 이름이었을지도 모른다. 그의 유년기는 다정한 부모, 풍족한 환경, 그리고 수도 없는 테라피와 상담으로 이루어져 있었다. 소년은 항상 관조했고, 관찰했고, 유도했다. 그의 가족은 그 묘한 거리두기를 힘들어 했지만, 그럼에도 그를 사랑했다. 그것이야말로 그가 평생토록 풀지 못한 단 하나의 의문이었다.\n\n그는 무미건조한 세상 속에서 언제나 친절하고 근사한 신사였다. 그러나 그는 또한 기다리고 있었다. 자신의 모든 의도된 친절함과 학습된 연민을 뒤흔들고 벗겨내어, 끝내 서늘한 맨 낯을 드러내어 보이게 할 누군가를. 그리고 그 때가 오면 부디 그 모습으로도 사랑받을 수 있기를.`,
    easterEggs: {
      fileNo: 'CIA 소속 SAD 출신. 블랙오버로 이직했다.',
      codename: '구조한 인질의 절반이 \'젠틀한\' 그에게 고백하려해서 붙은 별명.',
      photo: '금빛 머리, 연푸른 눈동자, 밝은 피부. 정돈된 인상의 성숙한 미남.'
    }
  },
  {
    id: 'joshua',
    team: 'SUPPORT',
    designation: 'SUPPORT-3',
    name: 'Joshua Mathis',
    callsign: 'BubbleGum',
    age: 28,
    dob: '19XX-06-22',
    nationality: 'Australia',
    role: 'Operative',
    position: 'Sniper',
    clearance: 'LEVEL 4',
    image: 'https://i.postimg.cc/kGyCG1N2/imiji-(1).jpg', // ■joshua■
    stats: { height: '183cm', weight: '83kg', vision: '20/10', blood: 'A-NEG', footSize: 'US10.5', smoking: 'No', allergy: 'None' },
    appearance: 'Dyed light coral hair, gray eyes. Sophisticated and pretty handsome look. 183cm, slim muscular build. Smiling, good-natured atmosphere.',
    outside: 'CheyTac M200 Intervention',
    inside: 'Opportunist (no malice, just efficient). Good at reading psychology. Lies well when necessary. Good common sense coexists with realistic pragmatism.',
    speech: 'Naturally mixes formal and informal language. Never loses an argument (jokingly). Induces tension relief. Excellent friendly conversation skills.',
    traits: '비흡연자(금연 시도 중). 6년간 군 복무를 했다.',
    notes: `조슈아는 웃음을 무기로 삼는 남자다. 눈에 띄는 분홍빛으로 늘 염색을 하고 다니는 것도, 실은 그가 자신의 모습을 정제하여 보여주고자 하기 때문일 것이다. 그는 언제나 밝게 웃고, 실망한 이를 위로하고, 전장 한 가운데서도 가벼운 농담을 던진다. 이유는 간단하다. 그렇게 할 수 있으니까. 그는 예전부터 이런 일에 능해왔다.\n\n그는 때로 자신의 깊은 그림자에서 과거의 어느 순간을 본다. 어린 시절, 자그마한 소년의 몸 속에는 분노와 원망이 가득했다. 그는 그저 햇살 아래에 나가고 싶었을 뿐인데, 지긋지긋한 삶은 어린 아이를 자꾸만 시궁창으로 끌어내리려 했다. 그는 지갑을 훔쳤다. 젊은 여자의 것, 심부름을 가는 아이의 것까지 가리지 않았다. 그러다 마침내 그 노인의 것을 훔쳤다. 정확히는 훔치려다 실패했지만.\n\n그는 그 날 자신이 새로운 삶과, 늙고 괴팍한 가족을 얻었다고 믿는다. 그는 거울을 바라볼때 저와 전혀 닮지 않았던 그 \'가족\'에 대해 생각한다. 그 고집스러운 마지막 말을 떠올리고, 오늘도 사람답게 살기 위해 웃으며 문을 나서는 것이다.`,
    easterEggs: {
      fileNo: '6년간 제2코만도연대 복무, 전역 후 블랙오버에 지원했다.',
      codename: '신병 시절, 자신을 열받게 하던 놈이 불던 풍선껌을 정확히 저격한 전적이 있다. 상관에게 깨지긴 했지만 내심 자랑스레 여기는 기억.',
      photo: '원래는 금발이지만 항상 염색을 유지한다. 연코랄빛 머리에 회색 눈동자, \'예쁜\'느낌의 오목조목한 이목구비.'
    }
  },
  {
    id: 'colin',
    team: 'SUPPORT',
    designation: 'SUPPORT-4',
    name: 'Colin Ratcliffe',
    callsign: 'Glitch',
    age: 26,
    dob: '19XX-02-28',
    nationality: 'USA',
    role: 'Operative',
    position: 'Hacker',
    clearance: 'LEVEL 5 (SPECIAL)',
    image: 'https://i.postimg.cc/Zq14MyKb/imiji-(2).jpg', // ■colin■
    stats: { height: '185cm', weight: '83kg', vision: '20/20', blood: 'AB-POS', footSize: 'US11', smoking: 'No', allergy: 'Dust' },
    appearance: 'Black hair, deep red eyes. Pale skin. Sensitive handsome look. Small mole on left cheek. 185cm, slim muscular build. Cold, emotionless atmosphere.',
    outside: 'Heckler & Koch HK416',
    inside: 'Rude (no malice, just his personality). Unconscious tsundere (subtly cares when he likes someone). Slightly clumsy in daily life outside of hacking.',
    speech: 'Mechanical formal language. Assertive without explanation. Speaks very little.',
    traits: '비흡연자(담배를 매우 싫어함). 고용 전 이력은 비공개(보안 등급 S).',
    notes: `콜린은 세상 모든 존재를 0과 1로 치환하여 이해하는 남자다. 그의 세상에서 \'가치\'란 제대로 기능할 수 있는지의 여부이고, 감정은 불필요한 노이즈일 뿐이다. 그의 콜사인은 시스템의 오류이지만 아이러니하게도 그는 시스템 그 자체이자, 절대 예측에서 벗어나지 않는 값이다.\n\n그의 소년기 또한 지금과 별반 다르지 않았다. 그는 스스로를 이끼와 같다 여겼는데, 누구의 관심이나 돌봄 없이도 멀쩡히 자랄 수 있었기 때문이었다. 경제적으로 풍족했으되 부모와 저녁 식사 조차 같이한 적 없던 소년. 그는 그대로 자라서, 전장에서 쓰러지는 적군을 보아도 무감한 남자가 되었다.\n\n아니, 그렇게 되었다고 굳게 믿고 있다. 적어도 그 자신은.`,
    easterEggs: {
      fileNo: 'JSOC 산하 ISA 출신. 이후 후안이 직접 스카웃.',
      codename: '타고난 해킹 실력에 붙은 별명. 본인은 좀 촌스럽다고 생각하는듯 하다.',
      photo: '검은 머리, 진한 붉은색 눈동자, 창백한 피부. 섬세하게 만들어진 인형같은 이목구비, 오른쪽 뺨에 작은 점이 있다.'
    }
  }
];
