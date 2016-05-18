var SIM_LableHash = {
	'lvl':'Skill Lv.',
	'MP':'Fee MP',
	'cast':'Skill Type',
	'CD':'Cooldown',
	'lvlup':'Level Up Requirements',
	'effect':'Skill Description',
	'element':'Attribute',
	'weapon':'Required Weapon',
	'nexteffect':'Skill Description (Next Level)'
};

SIM_AddSkill({
	"6605": {
		name: "Healing Chakra EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Healing Chakra Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Healing Chakra's damage reduction effect.<br><color_y>All Damage taken -{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '20']
		}
	},
	"6804": {
		name: "이즈나 드롭 (애쉬 소환)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Draws in nearby enemies and drags them into the air, then slams them into the ground. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '716', '733', '751', '769', '787', '882', '900', '918', '935', '953', '1048', '1066', '1084', '1102', '1119']
		}
	},
	"6018": {
		name: "Health Bolster",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases max {t5} by <color_y>{t6}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['20', '30', '40', '50', '60'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, 'HP', 'HP', 'HP', 'HP', 'HP'],
			'{t6}': [null, '15', '18', '21', '24', '27']
		}
	},
	"6215": {
		name: "Illusion Step",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 25 or above<br>SP {t4}",
			'effect': "Press jump while tumbling to change direction with a slide, leaving an afterimage. Evade all attacks for a short period of time.<br><color_y>Invincible for 0.5 sec while active<br>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '14', '13', '12', '11', '10', '9', '8'],
			'{t3}': ['20', '30', '40', '50', '60', '70', '80', '90'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '15', '14', '13', '12', '11', '10', '9', '8']
		}
	},
	"6607": {
		name: "Strike Ring EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Strike Ring Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Strike Ring's attack range and damage.<br><color_y>Strike Ring Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"6317": {
		name: "Illusory Chakra",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 25 or above<br>SP {t4}",
			'effect': "<color_w>Perform a lightning-quick dash fueled by Chakra. Make a Regular Attack during the dash to attack enemies and mark them as your primary target. Any summoned minions will ignore all threats and attack the marked enemy. Can be activated by pressing Jump during Tumble. Press the </color_w><color_y>Special Attack button</color_y><color_w> during Tumble to attack enemies immediately. During charge, double-tap an arrow key or press [Shift] to evade in any direction.<br></color_w><color_y>Mark Duration: {t5} sec<br></color_y><color_y>Cooldown: {t5} sec<br></color_y><color_y>Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '28', '26', '24', '22', '20', '18', '16', '14', '12', '10', '8'],
			'{t3}': ['21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t6}': [null, '30', '28', '26', '24', '22', '20', '18', '16', '14', '12', '10', '8'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"6308": {
		name: "Illusion Strike",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 20 or above<br>SP {t4}",
			'effect': "<color_w>Fires blades of abyssal energy in a wild spread that burn enemies with dark magic.<br></color_w><color_y>Dark Magic<br></color_y><color_y>Damage per Blade: {t5}%<br></color_y><color_y>Dark Burn Damage Taken: {t6}<br></color_y><color_y>Burn Damage Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '106', '109', '110', '112', '114', '116', '118', '119', '121', '124', '125', '128', '128', '131', '133', '135', '137', '138', '140', '143', '146'],
			'{t6}': [null, '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"6311": {
		name: "Dark Line",
		changeskill: "6710",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Focus Lv. 1<br>Assassin SP Total 40 or above<br>SP {t4}",
			'effect': "<color_w>Slash through enemies with a deadly dash. Press the </color_w><color_y>Regular Attack Button</color_y><color_w> to attack enemies as you dash forward, up to two times.<br></color_w><color_y>Dark Magic<br></color_y><color_y>Each Charge:<br>Damage: {t5}%<br></color_y><color_y>Dark Burn Damage Taken: {t6}<br></color_y><color_y>Burn Damage Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1488', '1530', '1572', '1615', '1657', '1882', '1925', '1967', '2009', '2051', '2277', '2319', '2361', '2404', '2446'],
			'{t6}': [null, '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"6219": {
		name: "Dedicate Crow",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 40 or above<br>SP {t4}",
			'effect': "Sacrifice a crow to temporarily increase your offensive might.<br><color_y>If enemy's HP is greater than {t5}%, +{t7}% Damage per 1% of HP<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90'],
			'{t3}': ['33'],
			'{t4}': ['10'],
			'{t5}': [null, '50'],
			'{t6}': [null, '50'],
			'{t7}': [null, '1.1'],
			'{t8}': [null, '15']
		}
	},
	"6304": {
		name: "Chakra Ring",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Energetic Chakra Lv. 1<br>Assassin SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Creates a Chakra ring that boosts your Movement Speed when you pass through it.<br></color_w><color_y>Movement Speed: +{t5}%<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['24'],
			'{t4}': ['10'],
			'{t5}': [null, '50%'],
			'{t6}': [null, '10']
		}
	},
	"6505": {
		name: "Flame Locust EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Barrage EX Lv. 1<br>Flame Locust Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Flaming Locust to deal an additional hit. Press the regular attack button to activate.<br><color_y>Fire Magic<br>Additional Hit Damage: {t5}% of Flaming Locust damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"6709": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Dark Line EX Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Illusory Chakra</color_y><color_w>, </color_w><color_y>Dark Line +</color_y><color_w> temporarily becomes an instant skill. When </color_w><color_y>Illusory Chakra</color_y><color_w> hits, restore Instant's cooldown by {t5} sec<br><br></color_w><color_y>Damage: +{t6}%<br>Dark Line and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '27'],
			'{t6}': [null, '5']
		}
	},
	"6501": {
		name: "Arsonist",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shadow Rage Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Fills you with the flames of madness, increasing both fire damage and fire resistance.<br><color_y>Additional Fire Damage: {t5}%<br>Additional Fire Resistance: {t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '24']
		}
	},
	"6603": {
		name: "Sunshine Spark",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Miraculous Chakra Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Manifest a giant ball of concentrated Chakra to blast through enemies, causing continuous damage. When the ball hits ground, it will explode to deal critical damage to all surrounding enemies, and temporarily lower enemy defenses.<br></color_w><color_y>Can be used while jumping.<br></color_y><color_y>Light Magic<br></color_y><color_y>Damage: {t5}%<br></color_y><color_y>Blast Damage (per hit): {t6}%<br></color_y><color_y>Enemy Damage Taken: +{t7}%<br></color_y><color_y>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '788', '815', '841', '868', '894', '1019', '1045', '1072', '1098', '1125', '1250', '1276', '1303'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"6554": {
		name: "Pursuer EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Pursuer Lv. 1<br>SP {t4}",
			'effect': "Enhances Pursuer. <color_y>Left-click</color_y><color_w> to unleash a raging combo at the end of the attack. Unleashes an explosion of madness after the combo. <br></color_w><color_y>Additional Attack Damage: {t5}%<br></color_y><color_y>Madness Explosion Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '25']
		}
	},
	"6706": {
		name: "Nether Burst EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nether Burst Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Nether Burst so when it hits the ground, it creates a dark flame to damage enemies in the area. After the attack, use the special attack button to evade.<br><color_y>Dark Flame Damage: {t5}% of Nether Burst damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"6216": {
		name: "Chain Chaser",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 35 or above<br>SP {t4}",
			'effect': "Throws a chain sickle forward and pulls you at the enemies. Press <color_y>regular attack</color_y><color_w> while being pulled to strike the ground.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '19', '18', '17', '16', '15', '14'],
			'{t3}': ['24', '34', '44', '54', '64', '74', '84'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '277', '294', '311', '327', '344', '395', '412']
		}
	},
	"6553": {
		name: "Umbra EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Umbra Lv. 1<br>SP {t4}",
			'effect': "Enhances Umbra. Forms a poisonous cloud above the shadow rune. The poisonous cloud will gather into the rune before the rune disappears and then explode.<br><color_y>Explosion Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"6602": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Enhances light chakra skills and permanently increases Light Attack. Casting Outbreak and Miraculous Chakra increases Damage for 10 seconds.<br></color_w><color_y>Light Attack: +{t5}%<br></color_y><color_y>Damage: +{t6}%<br></color_y><color_y>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"6805": {
		name: "아트풀 체이서 (애쉬 소환)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Unleashes a raging combo attack on anything in front of you.<br><color_y>Fire Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '2781', '2849', '2917', '2984', '3052', '3413', '3480', '3548', '3616', '3683', '4044', '4112', '4179']
		}
	},
	"6550": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Increases fire attack by <color_y>{t5}%</color_y><color_w>. Use </color_w><color_y>Shadow Rage</color_y><color_w> to sacrifice ashes to deal </color_w><color_y>Barrage, Shinobi Drop, or Pursuer</color_y><color_w> for {t6} sec. Receives {t7}% less physical damage and restores {t8}% HP when </color_w><color_y>Dedicate Shadow</color_y><color_w> is used as well.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '15'],
			'{t7}': [null, '70'],
			'{t8}': [null, '30']
		}
	},
	"6502": {
		name: "Pursuer",
		changeskill: "6805",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Arsonist Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Unleashes a raging combo attack on anything in front of you.<br><color_y>Fire Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2781', '2849', '2917', '2984', '3052', '3413', '3480', '3548', '3616', '3683', '4044', '4112', '4179']
		}
	},
	"6407": {
		name: "Chain Punisher EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chain Punisher Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Chain Punisher's damage and adds a downward strike attack.<br><color_y>Dark Magic<br>Additional Hit Damage: {t5}% of Chain Punisher damage<br>Damage taken increases {t6}%<br>Duration {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '20'],
			'{t7}': [null, '15']
		}
	},
	"6312": {
		name: "Dark Conviction",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Line Lv. 1<br>Assassin SP Total 45 or above<br>SP {t4}",
			'effect': "<color_w>Hook the ground to summon up the flames of darkness. The summoned flames will erupt out of the ground, then crash back and deal another round of damage that burns enemies with dark magic.<br></color_w><color_y>Dark Magic<br></color_y><color_y>Damage: {t5}%<br></color_y><color_y>Additional Ground Explosion Damage: 25%<br></color_y><color_y>Dark Burn Damage Taken: {t6}<br></color_y><color_y>Burn Damage Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '60'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '3043', '3128'],
			'{t6}': [null, '30%', '30%'],
			'{t7}': [null, '10', '10']
		}
	},
	"6604": {
		name: "Outbreak EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Outbreak Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Increases the damage of Outbreak's last hit. Use the special attack button after you evade to throw a Chakra that deals extra damage before you smash down on the enemy.<br><color_y>Strike Damage: +{t5}%<br>Chakra Damage: {t6}% of Outbreak damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['47'],
			'{t4}': ['3'],
			'{t5}': [null, '30'],
			'{t6}': [null, '80']
		}
	},
	"6207": {
		name: "Barrage",
		changeskill: "6803",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 20 or above<br>SP {t4}",
			'effect': "Moves forward while making multiple strikes.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '963', '987', '1011', '1036', '1060', '1173', '1197', '1221', '1245', '1270', '1382', '1407', '1431', '1455', '1479', '1592', '1616', '1641', '1665', '1689', '1802']
		}
	},
	"6009": {
		name: "Raid",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Throws a smoke bomb that make your and your allies' critical hits deal more damage. Extra damage is not affected by your weapon's attributes.<br><color_y>Critical Damage: +{t5}%<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['35'],
			'{t4}': ['0'],
			'{t5}': [null, '15'],
			'{t6}': [null, '300']
		}
	},
	"6315": {
		name: "Balm of Azuna",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Healing Chakra Lv. 1<br>Assassin SP Total 45 or above<br>SP {t4}",
			'effect': "<color_w>Summons a ninja bunny to restore your health.<br></color_w><color_y>Restores {t7}% HP every {t6} sec for {t5} sec<br></color_y><color_y>HP: {t8}% of your max HP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '2'],
			'{t7}': [null, '0.4'],
			'{t8}': [null, '60']
		}
	},
	"6011": {
		name: "Execution",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> near a knocked down enemy to pummel them into the ground.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '252']
		}
	},
	"6212": {
		name: "Shadow Rage",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shinobi Drop Lv. 1<br>Assassin SP Total 45 or above<br>SP {t4}",
			'effect': "Manifest Illusion's power to enter a violent berserker state that increases action speed. Deals a physical fire attack that recovers Shadow Rage's cooldown. <br><color_y>Regular Attack: </color_y><color_w>4 Chain Savage Attacks<br></color_w><color_y>Special Attack: </color_y><color_w>Dashes forward.<br></color_w><color_y>Fire Magic<br>Damage per Savage Attack: {t5}%<br>Action Speed: +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '557', '569'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '15', '15']
		}
	},
	"6318": {
		name: "Pact of Azuna",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Line Lv. 1<br>Assassin SP Total 45 or above<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 443% + 60<br></color_y><color_y>Ninja Cat has 60% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 451%<br></color_y><color_y>Ninja Cat has {60}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 459%<br></color_y><color_y>Ninja Cat has {60}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 467%<br></color_y><color_y>Ninja Cat has {60}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 475%<br></color_y><color_y>Ninja Cat has {60}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 549%<br></color_y><color_y>Ninja Cat has {60}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 557%<br></color_y><color_y>Ninja Cat has {60}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 564%<br></color_y><color_y>Ninja Cat has {60}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 572%<br></color_y><color_y>Ninja Cat has {60}% of caster's HP.</color_y>"]		}
	},
	"6211": {
		name: "Shinobi Drop",
		changeskill: "6804",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mortal Blow Lv. 1<br>Assassin SP Total 40 or above<br>SP {t4}",
			'effect': "Draws in nearby enemies and drags them into the air, then slams them into the ground. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '716', '733', '751', '769', '787', '882', '900', '918', '935', '953', '1048', '1066', '1084', '1102', '1119']
		}
	},
	"6213": {
		name: "Vengeful Edge",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 20 or above<br>SP {t4}",
			'effect': "Press <color_y>regular attack</color_y><color_w> when hit by an enemy to counterattack with 3 throwing daggers and regain your footing. <br></color_w><color_y>Damage per Dagger: {t5}%<br>Cooldown: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '29', '28', '27', '26', '25', '24', '23'],
			'{t3}': ['16', '26', '36', '46', '56', '66', '76', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '88', '95', '101', '105', '109', '121', '125', '129'],
			'{t6}': [null, '30', '29', '28', '27', '26', '25', '24', '23']
		}
	},
	"6205": {
		name: "Chain Punisher",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rain of Death Lv. 1<br>Assassin SP Total 40 or above<br>SP {t4}",
			'effect': "Spins forward and launches 3 attacks with your chain sickles that, decreasing their defense.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '922', '946', '970', '993', '1017', '1144', '1167', '1191', '1215', '1238', '1365', '1389', '1412', '1436', '1460']
		}
	},
	"6217": {
		name: "Burning Escape",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 35 or above<br>SP {t4}",
			'effect': "Causes you to explode, dealing damage to all enemies nearby, and then reappear from behind. Can be activated by pressing <color_y>jump</color_y><color_w> during an attack.<br></color_w><color_y>Damage: {t5}%<br>Cooldown {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '11.5', '11', '10.5', '10', '9.5', '9', '8.5', '8', '7.5', '7'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '256', '265', '273', '282', '290', '329', '338', '346', '354', '363', '402'],
			'{t6}': [null, '12', '11.5', '11', '10.5', '10', '9.5', '9', '8.5', '8', '7.5', '7']
		}
	},
	"6608": {
		name: "Sunshine Spark EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sunshine Spark Lv. 1<br>SP {t4}",
			'effect': "Chakra sphere explodes repeatedly, dealing {t5}% damage. Deals an additional {t6}% damage when it explodes at the end of its flight.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '50']
		}
	},
	"6301": {
		name: "Outbreak",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 20 or above<br>SP {t4}",
			'effect': "<color_w>Fly forward to attack enemies. Use a regular attack to land with a knock down attack.<br></color_w><color_y>Light Magic<br></color_y><color_y>Damage: {t5}%<br></color_y><color_y>Damage on Impact: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '564', '578', '591', '605', '618', '681', '694', '708', '721', '735', '797', '811', '824', '837', '851', '913', '927', '940', '954', '967', '1030'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"6208": {
		name: "Mortal Blow",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Blade Runner Lv. 1<br>Assassin SP Total 35 or above<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 911%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 925%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 939%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 953%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 967%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1080%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1094%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1108%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1122%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1136%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1250%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1264%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1278%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1292%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1306%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1420%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 1434%<br>Max Cooldown Charge: 2</color_y>']		}
	},
	"6012": {
		name: "Tumble",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the same direction key twice to dodge in that direction. You can also press [Shift] and a direction key simultaneously to dodge in that direction.<br><color_y>Grants invincibility for {t5} sec when the skill is used.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2.6', '2.6'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '0.6']
		}
	},
	"6320": {
		name: "Chakra Punch",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Press the </color_w><color_y>Special Attack button</color_y><color_w> while tumbling to land and punch the nearest enemy.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['21'],
			'{t4}': ['1'],
			'{t5}': [null, '100']
		}
	},
	"6710": {
		name: "Dark Line + Instance",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Dark Line can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"6403": {
		name: "Open Edge EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Open Edge Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Increases the damage of Open Edge. Pulls in enemy and causes explosion.<br><color_y>Dark Magic<br>Open Edge Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['47'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"6013": {
		name: "Gore Slam",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> while jumping to strike down with a roundhouse kick. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '169']
		}
	},
	"6310": {
		name: "Dark Focus",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nether Burst Lv. 1<br>Assassin SP Total 35 or above<br>SP {t4}",
			'effect': "<color_w>Gather up a dose of dark energy and blast enemies with a dark burning effect that eventually explodes.<br></color_w><color_y>Dark Magic<br></color_y><color_y>Damage: {t5}%<br></color_y><color_y>Damage per Dark Burn Explosion Hit: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '561', '569', '577', '584', '592', '655', '663', '670', '678', '686', '749', '756', '764', '772', '780', '842', '850'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"6555": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Barrage EX Lv. 1<br>Shinobi Drop EX Lv. 1<br>Pursuer EX Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Barrage</color_y><color_w>,</color_w><color_y>Shinobi Drop</color_y><color_w>,</color_w><color_y>Pursuer</color_y><color_w>, you have a chance to use additional skills that your ashes casted for a while.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '']
		}
	},
	"6203": {
		name: "Raking Stars",
		changeskill: "6557",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Iron Applause Lv. 1<br>Assassin SP Total 30 or above<br>SP {t4}",
			'effect': "Throws blades in a fan formation. The blades return to you, dealing additional damage. <br><color_y>Effective against knocked down enemies.<br></color_y><color_y>Damage per Blade: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '121', '122', '124', '125', '127', '139', '141', '142', '144', '145', '158', '160', '161', '163', '164', '177', '178', '180', '181', '183']
		}
	},
	"6003": {
		name: "Piercing Star",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 233%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 239%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 245%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 251%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 257%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 306%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 312%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 318%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 324%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 330%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 379%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 386%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 392%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 398%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 404%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 453%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 459%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 465%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 471%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 477%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 526%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 532%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 538%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 544%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 551%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 557%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 563%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 569%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 575%<br>Max Cooldown Charge: 2</color_y>']		}
	},
	"6209": {
		name: "Flame Locust",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Barrage Lv. 1<br>Assassin SP Total 25 or above<br>SP {t4}",
			'effect': "Pushes enemies back with a front kick, then launches them with a roundhouse. Also activated by pressing <color_y>special attack</color_y><color_w> during a tumble.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '10', '10', '10', '10', '10', '8', '8', '8', '8', '8', '6', '6', '6', '6', '6'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '733', '745', '757', '768', '780', '877', '888', '900', '912', '923', '1020', '1032', '1043', '1055', '1067', '1163', '1175', '1187', '1198', '1210']
		}
	},
	"6701": {
		name: "Nightfall",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Conviction Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Create a dark sigil around you that continuously damages any enemies within. Use the Special Attack button during this skill to perform an evasive move. <br></color_w><color_y>Dark Magic<br></color_y><color_y>Damage per Hit: {t5}%<br></color_y><color_y>Damage Taken: +{t6}%<br></color_y><color_y>{t7}% damage when summoned<br></color_y><color_y>Number of Hits: {t8}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '102', '103', '104', '104', '105', '108', '108', '109', '109', '110', '113', '113', '114', '114'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"6704": {
		name: "Night BurstEX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Illusion Strike EX Lv. 1<br>Night Burst Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Night Burst's damage and creates a Chakra at the explosion site. The Chakra will draw enemies in and deal damage to them.<br><color_y>Night Burst Damage: +{t5}%<br>Damage per Chakra Attack: {t6}% of Night Burst damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '5']
		}
	},
	"6303": {
		name: "Energetic Chakra",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Outbreak Lv. 1<br>Assassin SP Total 25 or above<br>SP {t4}",
			'effect': "<color_w>Create a Chakra that heals the two members of your party with the lowest HP. This skill will only target members within the spell range, and is based on percent of total HP.<br></color_w><color_y>Restores {t5}% HP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['20'],
			'{t4}': ['10'],
			'{t5}': [null, '15']
		}
	},
	"6309": {
		name: "Nether Burst",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Night Burst Lv. 1<br>Assassin SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Creates a ring of abyss in the air and slams down on to the ground. Deals dark burn damage to enemies.<br></color_w><color_y>Can be used while jumping<br></color_y><color_y>Dark Magic<br></color_y><color_y>Damage: {t5}%<br></color_y><color_y>Dark Burn Damage: {t6}<br></color_y><color_y>Burn Damage Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1251', '1281', '1312', '1342', '1372', '1618', '1648', '1678', '1709', '1739', '1985', '2015', '2045', '2076', '2106', '2352', '2382', '2412'],
			'{t6}': [null, '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"6305": {
		name: "Strike Ring",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chakra Ring Lv. 1<br>Assassin SP Total 35 or above<br>SP {t4}",
			'effect': "<color_w>Soar high into the air and create a spinning ring of chakra beneath you to damage enemies, falling slowly back to the ground as the chakra continues its area attacks. Your landing will launch enemies into the air. Press the Jump Button to land faster.<br></color_w><color_y>Light Magic<br></color_y><color_y>Per Hit:<br>Damage {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '122', '125', '128', '132', '135', '153', '156', '159', '163', '166', '184', '187', '190', '194', '197', '215', '218']
		}
	},
	"6214": {
		name: "Fade",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 20 or above<br>SP {t4}",
			'effect': "Becomes invisible. Enemies within 5m will lose track of you and your damage increases. However, you also take more damage from attacks.<br><color_y>Physical Damage: +{t5}%<br>Damage Taken: +{t6}% <br>Eliminate enemy threat in 5m range<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20'],
			'{t3}': ['16'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '5']
		}
	},
	"6556": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Raking Stars EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Triple Blade</color_y><color_w>, </color_w><color_y>Raking Stars EX</color_y><color_w> temporarily becomes an instant skill. When </color_w><color_y>Triple Blade</color_y><color_w> hits, restore Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}% <br>Raking Stars and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '18'],
			'{t6}': [null, '5']
		}
	},
	"6702": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Enhances dark chakra skills and Dark Attack. Illusion Strike and Dark Focus deal more Damage.<br></color_w><color_y>Dark Attack: +{t5}%<br></color_y><color_y>Damage: +{t6}%<br></color_y><color_y>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"6319": {
		name: "Summon Shadow",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Creates clones of you that will attack enemies with your skills for a short time.<br></color_w><color_y>Physical Damage: {t5}%<br></color_y><color_y>Duration: {t6} sec<br></color_y><color_y>Number of Clones: {t7}<br></color_y><color_y>Use the same skills as you<br></color_y><color_y>HP: 60% of your Max HP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30'],
			'{t3}': ['35', '70'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '150', '200'],
			'{t6}': [null, '10', '10'],
			'{t7}': [null, '2', '2']
		}
	},
	"6016": {
		name: "Decoy",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tumble Lv. 1<br>SP {t4}",
			'effect': "Enables you to evade when getting hit, and leave behind a wood barrel which lets out a debuff. Enemies affected by the debuff will receive Critical damage. <br><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20'],
			'{t3}': ['10'],
			'{t4}': ['5'],
			'{t5}': [null, '20']
		}
	},
	"6404": {
		name: "Iron Applause EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Open Edge EX Lv. 1<br>Iron Applause Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Iron Applause to deal additional attacks. Press the regular attack button to activate.<br><color_y>Dark Magic<br>Additional Hit Damage: {t5}% of Iron Applause</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"6005": {
		name: "Shadow Hand",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 255%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 260%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 265%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 270%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 276%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 317%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 322%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 327%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 332%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 337%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 482%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 489%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 496%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 502%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 509%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 563%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 569%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 576%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 582%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 589%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 643%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 649%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 656%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 662%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 669%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 676%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 682%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 689%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>"]		}
	},
	"6707": {
		name: "Dark Line EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Line Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Dark Line to make up to {t5} chain attacks.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '2'],
			'{t6}': [null, '3']
		}
	},
	"6302": {
		name: "Healing Chakra",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Strike Ring Lv. 1<br>Assassin SP Total 40 or above<br>SP {t4}",
			'effect': "<color_w>Focus to summon a clone that grants Chakra to party members and self. The range of effective Chakra distribution decreases with time.<br></color_w><color_y>Per Chakra<br></color_y><color_y>Recovers {t5}% MP<br></color_y><color_y>Range {t6}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['32'],
			'{t4}': ['10'],
			'{t5}': [null, '1'],
			'{t6}': [null, '5']
		}
	},
	"6503": {
		name: "Barrage EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Barrage Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Barrage to strike down on enemies after multiple Barrage attacks. Use the special attack button to activate.<br><color_y>Fire Magic<br>Additional Hit Damage: {t5}% of Barrage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['47'],
			'{t4}': ['3'],
			'{t5}': [null, '50']
		}
	},
	"6001": {
		name: "Swift Cut",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 120%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 123%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 126%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 129%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 132%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 147%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 150%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 153%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 156%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 159%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 173%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 176%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 179%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 182%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 185%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 200%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 203%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 206%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 209%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 212%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 226%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 229%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 232%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 235%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 238%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 252%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 256%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 259%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 262%<br>Max Cooldown Charge: 2</color_y>']		}
	},
	"6004": {
		name: "Fan of Blades",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Spins in place to push enemies away and throws out 6 daggers.<br><color_y>Damage per Dagger: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '167', '169', '171', '173', '174', '190', '192', '194', '196', '198', '213', '215', '217', '219', '221', '236', '238', '240', '242', '244', '259', '261', '263', '265', '267', '269', '271', '273']
		}
	},
	"6606": {
		name: "Energetic Chakra EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Energetic Chakra Lv. 1<br>Outbreak EX Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Energetic Chakra to heal up to 3 people and increase your movement speed.<br><color_y>Movement Speed: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"6017": {
		name: "Aerial Evasion",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "When launched into the air, press <color_y>jump</color_y><color_w> to land on your feet.<br></color_w><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18'],
			'{t3}': ['14'],
			'{t4}': ['5'],
			'{t5}': [null, '18']
		}
	},
	"6204": {
		name: "Rain of Death",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Raking Stars Lv. 1<br>Assassin SP Total 35 or above<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 213%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 219%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 224%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 230%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 236%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 282%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 288%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 293%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 299%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 305%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 351%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 356%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 362%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 368%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 373%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 419%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 425%<br>Max Cooldown Charge: 2</color_y>']		}
	},
	"6705": {
		name: "Illusion Strike EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Illusion Strike Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Allows you to stop Illusion Strike with the regular/special attack buttons to fire blades at enemies. Use the special attack button to shoot blades in all directions.<br><color_y>Damage per Blade: {t5}% of Illusion Strike damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['47'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"6703": {
		name: "Darkness Incarnate",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Buff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nightfall Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Uses dark chakra energy to temporarily increase Dark Attack.<br></color_w><color_y>Dark Attack: +{t5}%<br></color_y><color_y>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['50'],
			'{t4}': ['10'],
			'{t5}': [null, '35'],
			'{t6}': [null, '30']
		}
	},
	"6206": {
		name: "Overkill",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chain Punisher Lv. 1<br>Assassin SP Total 45 or above<br>SP {t4}",
			'effect': "In a frenzy, throws a sickle to interrupt enemies, then jumps into the air and rains exploding daggers on the area. <br><color_y>Dark Magic<br>Damage per Dagger: {t5}%<br>Action Speed -{t6}% when Chain Hits<br>Invincible in Air for 2 sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '230', '237'],
			'{t6}': [null, '50', '50']
		}
	},
	"6014": {
		name: "Leap Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> near a stunned enemy to launch them into the air with a roundhouse kick.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '169']
		}
	},
	"6313": {
		name: "Spectral Blades",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 20 or above<br>SP {t4}",
			'effect': "<color_w>Summons an abyssal blade from the earth, knocking enemies into the air.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1305', '1346', '1386', '1426', '1467', '1732', '1772', '1813', '1853', '1893', '2158', '2199', '2239']
		}
	},
	"6316": {
		name: "Blessing of Azuna",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 20 or above<br>SP {t4}",
			'effect': "<color_w>Summons a ninja raccoon to boost your Light and Dark Attack. As long as it is activate, the ninja raccoon casts enhancement spells every {t5} sec.<br></color_w><color_y>Enhancement Spell<br>Light Attack +{t6}%<br></color_y><color_y>Dark Attack +{t7}%<br>Duration {t8} sec<br><br></color_y><color_y>Ninja Raccoon has {t9}% of caster's HP.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20'],
			'{t3}': ['20'],
			'{t4}': ['10'],
			'{t5}': [null, '5'],
			'{t6}': [null, '15'],
			'{t7}': [null, '15'],
			'{t8}': [null, '30'],
			'{t9}': [null, '60']
		}
	},
	"6015": {
		name: "Smoke Bomb",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>regular attack</color_y><color_w> when knocked down to detonate a smoke bomb.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16'],
			'{t3}': ['5'],
			'{t4}': ['1'],
			'{t5}': [null, '169']
		}
	},
	"6020": {
		name: "Attuned Mind",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mental Fortitude Lv. 1<br>SP {t4}",
			'effect': "MP recovery every 2 sec: <color_y>{t5} </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['30', '40', '50', '60', '70'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, '50', '100', '150', '200', '250']
		}
	},
	"6601": {
		name: "Miraculous Chakra",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Pulse Ring Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Shoots a miraculous healing Chakra towards allies.<br></color_w><color_y>Recovers {t5}% HP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '30.0']
		}
	},
	"6307": {
		name: "Night Burst",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Illusion Strike Lv. 1<br>Assassin SP Total 25 or above<br>SP {t4}",
			'effect': "<color_w>Creates an explosive magic seal. Enemies hit by the blast will suffer dark burn damage.<br></color_w><color_y>Dark Magic<br></color_y><color_y>Damage: {t5}%<br></color_y><color_y>Dark Burn Damage Taken: {t6}<br></color_y><color_y>Burn Damage Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1523', '1547', '1572', '1596', '1620', '1818', '1842', '1866', '1891', '1915', '2112', '2137', '2161', '2185', '2209', '2407', '2431', '2455', '2480'],
			'{t6}': [null, '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%', '30%'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"6803": {
		name: "쉬프트 블로우 (애쉬 소환)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Moves forward while making multiple strikes.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '963', '987', '1011', '1036', '1060', '1173', '1197', '1221', '1245', '1270', '1382', '1407', '1431', '1455', '1479', '1592', '1616', '1641', '1665', '1689', '1802']
		}
	},
	"6006": {
		name: "Triple Blade",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fan of Blades Lv. 1<br>SP {t4}",
			'effect': "Throws 3 daggers while dodging back. Press <color_y>regular attack</color_y><color_w> while tumbling to throw daggers in the desired direction.<br></color_w><color_y>Damage per Dagger: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '49', '50', '50', '51', '52', '62', '62', '63', '64', '64', '74', '75', '76', '76', '77', '87', '88', '88', '89', '90', '100', '101', '101', '102', '103', '104', '105']
		}
	},
	"6306": {
		name: "Pulse Ring",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Healing Chakra Lv. 1<br>Assassin SP Total 45 or above<br>SP {t4}",
			'effect': "<color_w>Creates a ball of chakra at your fingertips to attack enemies or protect your allies.<br><br></color_w><color_y>(Regular Attack Button):</color_y><color_w> Create a Chakra barrier to protect allies. Reduce damage taken and negates status abnormalities for allies, but not for self.<br></color_w><color_y>Physical Damage Taken: -{t5}%<br></color_y><color_y>Magic Damage Taken: -{t6}%<br></color_y><color_y>Cancels {t7} harmful status effect(s)<br><br></color_y><color_y>(Special Attack Button):</color_y><color_w> Chakra Explosion<br></color_w><color_y>Light Damage<br></color_y><color_y>Physical Damage: {t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['120', '120', '120'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '30', '30'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '10', '10'],
			'{t8}': [null, '2208', '2269']
		}
	},
	"6551": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Dark Damage by <color_y>{t5}% </color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10']
		}
	},
	"6557": {
		name: "레이크 EX 인스턴트",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "빠르게 사용가능한 [레이크]입니다.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86', '89'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"6008": {
		name: "Feint",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Pulls you from the brink of death and restores some HP.<br><color_y>Health Restored: {t5}% of Max HP<br>Invincibility Duration: {t6} sec<br></color_y><color_y>Cooldown does not reset after revival<br>Cooldown: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['300', '300'],
			'{t3}': ['10'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '3'],
			'{t7}': [null, '300']
		}
	},
	"6507": {
		name: "Shinobi Drop EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shinobi Drop Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Shinobi Drop's damage and attack range and adds flames to make the skill more destructive.<br><color_y>Fire Magic<br>Additional Hit Damage: {t5}% of Shinobi Drop</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"6506": {
		name: "Blade Runner EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Blade Runner Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Wreaths Blade Runner's downward strike in flames that cause a knockback shockwave and weakens the target's Elemental Defense.<br><color_y>Fire Magic<br>Additional Hit Damage: {t5}% of Blade Runner<br>Elemental Defense -{t7}% for {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '11'],
			'{t7}': [null, '20']
		}
	},
	"6218": {
		name: "Dedicate Shadow",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 40 or above<br>SP {t4}",
			'effect': "Sacrifices a shadow to reduce magic damage taken and restore HP when hit by magic.<br><color_y>Health Restored upon Magic Damage: {t5}% of Max HP<br>Magic Damage Taken: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45'],
			'{t3}': ['31'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '75'],
			'{t7}': [null, '5']
		}
	},
	"6210": {
		name: "Blade Runner",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Flame Locust Lv. 1<br>Assassin SP Total 30 or above<br>SP {t4}",
			'effect': "Dashes forward to strike the enemy with your elbow. Upon hit, you vanish up into the sky and slam down on the enemy from above.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '887', '904', '921', '937', '954', '1091', '1108', '1125', '1141', '1158', '1295', '1312', '1328', '1345', '1362', '1499', '1516', '1532', '1549']
		}
	},
	"6708": {
		name: "Nightfall EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nightfall Lv. 1<br>SP {t4}",
			'effect': "Enhances Nightfall. Creates a larger mantle and increases the mantle's duration. The fire in the middle of the mantle deals an additional {t5}% damage.<br>Mantle Duration +{t6}%",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '50']
		}
	},
	"6402": {
		name: "Dead Fall",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Umbra Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a murder of crows to explode at the enemies.<br><color_y>Dark Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '940', '962', '983', '1005', '1027', '1142', '1163', '1185', '1207', '1228', '1344', '1365', '1387']
		}
	},
	"6405": {
		name: "Raking Stars EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Raking Stars Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Use the regular/special attack button to throw a wave of knives. Using the special attack button adds a backstep into your throw.<br><color_y>Dark Magic</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"6007": {
		name: "Air Sprint",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>jump</color_y><color_w> again while already jumping to double jump.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"6010": {
		name: "Gore Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> to push enemies back with a roundhouse kick.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"6609": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Miraculous Chakra Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Miraculous Chakra</color_y><color_w>, Movement Speed increases {t6}% for {t5} sec.<br><br></color_w><color_y>Damage +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '20'],
			'{t7}': [null, '5']
		}
	},
	"6019": {
		name: "Mental Fortitude",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases max {t5} by <color_y>{t6}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['20', '30', '40', '50', '60'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, 'MP', 'MP', 'MP', 'MP', 'MP'],
			'{t6}': [null, '15', '18', '21', '24', '27']
		}
	},
	"6314": {
		name: "Chakra Cure",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 25 or above<br>SP {t4}",
			'effect': "<color_w>Uses chakra energy to remove status effects from both yourself and allies. However, it does not remove disabled status effects. <br></color_w><color_y>Removes up to {t5} status effects(s)<br>Cooldown: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25'],
			'{t3}': ['21'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '25']
		}
	},
	"6002": {
		name: "Dirty Trick",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 171%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 174%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 177%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 180%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 183%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 208%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 211%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 214%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 217%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 220%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 305%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 309%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 313%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 316%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 320%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 352%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 356%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 360%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 364%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 368%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 399%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 403%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 407%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 411%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 415%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 419%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 422%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 426%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 430%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>']		}
	},
	"6202": {
		name: "Iron Applause",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Open Edge Lv. 1<br>Assassin SP Total 25 or above<br>SP {t4}",
			'effect': "Sweep <color_y>Chained Sickles</color_y><color_w> out to slash the enemies in front of you, decreasing their defenses.<br></color_w><color_y>Damage: {t5}%<br>Enemy Critical Resist: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '700', '712', '723', '735', '747', '842', '854', '866', '878', '889', '985', '997', '1008', '1020', '1032', '1127', '1139', '1151', '1163', '1174'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"6401": {
		name: "Umbra",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Overkill Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Creates a shadow zone in a ring around you. Enemies in the shadow have decreased action speed and receive damage. If enemies' action speed does not decrease, they take <color_y>{t5}%</color_y><color_w> additional damage.<br></color_w><color_y>Dark Magic<br>Damage: {t6}%<br>Action Speed: -{t7}%<br>Duration: 10 sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t6}': [null, '1128', '1168', '1208', '1248', '1287', '1448', '1488', '1528', '1568', '1608'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"6201": {
		name: "Open Edge",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 20 or above<br>SP {t4}",
			'effect': "Throw daggers to push enemies back.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '657', '672', '688', '703', '718', '789', '804', '819', '835', '850', '920', '936', '951', '966', '981', '1052', '1067', '1083', '1098', '1113', '1184']
		}
	}
});