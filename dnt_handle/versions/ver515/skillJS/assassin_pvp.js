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
		name: "Healing Chakra EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Healing Chakra Lv. 1<br>Taoist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Healing Chakra's damage reduction effect. Press the regular attack button during Healing Chakra to shoot a Sunshine Spark.<br><color_y>All Damage Taken: -{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '10']
		}
	},
	"6804": {
		name: "이즈나 드롭 (애쉬 소환) (PVP)",
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
			'{t5}': [null, '350', '362', '371', '389', '400', '449', '461', '473', '485', '497', '550', '564', '578', '593', '609']
		}
	},
	"6018": {
		name: "Health Bolster (PVP)",
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
		name: "Illusion Step (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['20', '30', '40', '50', '60', '70', '80', '90'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"6607": {
		name: "Strike Ring EX (PVP)",
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
		name: "Illusory Chakra (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"6308": {
		name: "Illusion Strike (PVP)",
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
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '26', '27', '28', '29', '30', '31', '32', '33', '34', '36', '40', '41', '42', '43', '44', '45', '46', '48', '49', '50', '52'],
			'{t6}': [null, '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"6311": {
		name: "Dark Line (PVP)",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '248', '258', '264', '279', '287', '322', '331', '341', '350', '360', '398', '409', '421', '434', '447'],
			'{t6}': [null, '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"6219": {
		name: "Dedicate Crow (PVP)",
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
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '1.1'],
			'{t8}': [null, '15']
		}
	},
	"6304": {
		name: "Chakra Ring (PVP)",
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
			'{t5}': [null, '25%'],
			'{t6}': [null, '10']
		}
	},
	"6505": {
		name: "Flame Locust EX (PVP)",
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
			'{t5}': [null, '30']
		}
	},
	"6709": {
		name: "Class Mastery II (PVP)",
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
		name: "Arsonist (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shadow Rage Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Fills you with the flames of madness, increasing both fire damage and fire resistance.<br><color_y>Fire Damage: +{t5}%<br>Fire Resistance: +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '15.0'],
			'{t6}': [null, '15.0'],
			'{t7}': [null, '24']
		}
	},
	"6603": {
		name: "Sunshine Spark (PVP)",
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
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '457', '473', '489', '505', '521', '604', '622', '642', '662', '683', '779', '804', '830'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"6554": {
		name: "Pursuer EX (PVP)",
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
			'{t5}': [null, '35'],
			'{t6}': [null, '25']
		}
	},
	"6706": {
		name: "Nether Burst EX (PVP)",
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
		name: "Chain Chaser (PVP)",
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
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['24', '34', '44', '54', '64', '74', '84'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '157', '165', '175', '185', '195', '220', '233']
		}
	},
	"6553": {
		name: "Umbra EX (PVP)",
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
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '5'],
			'{t6}': [null, '5'],
			'{t7}': [null, '5']
		}
	},
	"6805": {
		name: "아트풀 체이서 (애쉬 소환) (PVP)",
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
			'{t5}': [null, '483', '495', '508', '520', '532', '594', '608', '623', '638', '654', '723', '742', '761']
		}
	},
	"6606": {
		name: "Energetic Chakra EX (PVP)",
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
			'{t5}': [null, '25']
		}
	},
	"6502": {
		name: "Pursuer (PVP)",
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
			'{t5}': [null, '483', '495', '508', '520', '532', '594', '608', '623', '638', '654', '723', '742', '761']
		}
	},
	"6407": {
		name: "Chain Punisher EX (PVP)",
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
			'{t6}': [null, '10'],
			'{t7}': [null, '15']
		}
	},
	"6312": {
		name: "Dark Conviction (PVP)",
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
			'{t5}': [null, '529', '542'],
			'{t6}': [null, '15%', '15%'],
			'{t7}': [null, '5', '5']
		}
	},
	"6604": {
		name: "Outbreak EX (PVP)",
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
		name: "Barrage (PVP)",
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
			'{t5}': [null, '205', '208', '211', '214', '218', '232', '238', '243', '247', '259', '280', '288', '295', '301', '308', '333', '340', '348', '357', '366', '397']
		}
	},
	"6009": {
		name: "Raid (PVP)",
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
		name: "Balm of Azuna (PVP)",
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
			'{t2}': ['60', '60'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '2'],
			'{t7}': [null, '0.13'],
			'{t8}': [null, '30']
		}
	},
	"6011": {
		name: "Execution (PVP)",
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
			'{t5}': [null, '165']
		}
	},
	"6212": {
		name: "Shadow Rage (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shinobi Drop Lv. 1<br>Assassin SP Total 45 or above<br>SP {t4}",
			'effect': "Manifest Illusion's power sends you into a violent berserker state that increases action speed. <br><color_y>[Regular Attack]: </color_y><color_w>4 Chain Savage Attacks<br></color_w><color_y>[Special Attack]: </color_y><color_w>Dash forward.<br></color_w><color_y>Fire Magic<br>Damage per Savage Attack <br>{t5}%<br>Action Speed +{t6}%<br>Duration {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '274', '278'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '10', '10']
		}
	},
	"6318": {
		name: "Pact of Azuna (PVP)",
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
			'{t2}': ['60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t3}': ['36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 132% + 10<br></color_y><color_y>Ninja Cat has 10% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 133%<br></color_y><color_y>Ninja Cat has {10}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 134%<br></color_y><color_y>Ninja Cat has {10}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 138%<br></color_y><color_y>Ninja Cat has {10}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 140%<br></color_y><color_y>Ninja Cat has {10}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 142%<br></color_y><color_y>Ninja Cat has {10}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 144%<br></color_y><color_y>Ninja Cat has {10}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 145%<br></color_y><color_y>Ninja Cat has {10}% of caster's HP.</color_y>", "<color_w>Summons a ninja cat to help you in battle. The ninja cat attacks enemies until it dies or is canceled.<br></color_w><color_y>Dark Damage<br></color_y><color_y>Physical Damage: 147%<br></color_y><color_y>Ninja Cat has {10}% of caster's HP.</color_y>"]		}
	},
	"6211": {
		name: "Shinobi Drop (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '350', '362', '371', '389', '400', '449', '461', '473', '485', '497', '550', '564', '578', '593', '609']
		}
	},
	"6213": {
		name: "Vengeful Edge (PVP)",
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
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['16', '26', '36', '46', '56', '66', '76', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '98', '99', '100', '102', '104', '108', '110', '112'],
			'{t6}': [null, '45', '45', '45', '45', '45', '45', '45', '45']
		}
	},
	"6205": {
		name: "Chain Punisher (PVP)",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '326', '339', '347', '367', '378', '426', '439', '451', '464', '476', '529', '544', '559', '575', '592']
		}
	},
	"6217": {
		name: "Burning Escape (PVP)",
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
			'{t2}': ['28', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '136', '138', '140', '142', '144', '152', '154', '156', '158', '160', '169'],
			'{t6}': [null, '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18']
		}
	},
	"6608": {
		name: "Sunshine Spark EX (PVP)",
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
			'{t5}': [null, '25'],
			'{t6}': [null, '25']
		}
	},
	"6301": {
		name: "Outbreak (PVP)",
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
			'{t5}': [null, '187', '190', '193', '195', '199', '211', '216', '220', '224', '234', '251', '259', '264', '270', '276', '297', '303', '310', '317', '325', '351'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"6208": {
		name: "Mortal Blow (PVP)",
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
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 263%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 266%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 272%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 276%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 280%</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 316%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 324%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 330%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 336%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 342%<br>Max Cooldown Charge: 1</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 376%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 383%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 390%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 398%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 406%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 445%<br>Max Cooldown Charge: 2</color_y>', 'Knock enemies back and vanish. Reappear a moment later to attack enemies from the air. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Fire Magic<br>Damage: 456%<br>Max Cooldown Charge: 2</color_y>']		}
	},
	"6012": {
		name: "Tumble (PVP)",
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
		name: "Chakra Punch (PVP)",
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
		name: "Dark Line + Instance (PVP)",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"6403": {
		name: "Open Edge EX (PVP)",
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
		name: "Gore Slam (PVP)",
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
			'{t5}': [null, '129']
		}
	},
	"6310": {
		name: "Dark Focus (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nether Burst Lv. 1<br>Assassin SP Total 35 or above<br>SP {t4}",
			'effect': "<color_w>Gather up a dose of dark energy and blast enemies with a dark burning effect that eventually explodes. Only effective on enemies that are facing you, and may inflict blindness.<br></color_w><color_y>Dark Magic<br></color_y><color_y>Damage {t5}%<br></color_y><color_y>Damage per Dark Burn Explosion Hit: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '208', '210', '214', '217', '220', '244', '249', '253', '258', '262', '286', '291', '296', '302', '308', '336', '344'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"6555": {
		name: "Class Mastery II (PVP)",
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
		name: "Raking Stars (PVP)",
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
			'{t5}': [null, '35.9', '36.0', '36.1', '36.2', '36.3', '36.9', '37.0', '37.1', '37.2', '37.4', '38.0', '38.2', '38.3', '38.5', '38.6', '39.4', '39.5', '39.7', '39.9', '40.1']
		}
	},
	"6003": {
		name: "Piercing Star (PVP)",
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
			'{t5}': [null, 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 116%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 117%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 118%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 120%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 121%</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 124%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 125%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 126%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 127%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 128%<br>Max Cooldown Charge: 1</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 134%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 136%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 137%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 138%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 142%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 151%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 152%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 154%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 156%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 158%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 168%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 170%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 172%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 175%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 178%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 180%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 183%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 187%<br>Max Cooldown Charge: 2</color_y>', 'Creates a spinning dagger and flings it forward. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Effective on knocked down enemies.<br>Damage: 190%<br>Max Cooldown Charge: 2</color_y>']		}
	},
	"6209": {
		name: "Flame Locust (PVP)",
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
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '198', '200', '202', '204', '206', '225', '227', '231', '241', '245', '268', '273', '278', '283', '288', '314', '320', '327', '334', '342']
		}
	},
	"6701": {
		name: "Nightfall (PVP)",
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
			'{t5}': [null, '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"6704": {
		name: "Night BurstEX (PVP)",
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
		name: "Energetic Chakra (PVP)",
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
			'{t2}': ['35', '35'],
			'{t3}': ['20'],
			'{t4}': ['10'],
			'{t5}': [null, '3.8']
		}
	},
	"6309": {
		name: "Nether Burst (PVP)",
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
			'{t5}': [null, '168', '171', '173', '177', '179', '197', '206', '210', '216', '220', '244', '249', '254', '260', '265', '294', '301', '309'],
			'{t6}': [null, '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"6305": {
		name: "Strike Ring (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '51', '51', '52', '52', '53', '56', '57', '58', '59', '60', '62', '63', '64', '66', '67', '71', '72']
		}
	},
	"6214": {
		name: "Fade (PVP)",
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
			'{t2}': ['30', '30'],
			'{t3}': ['16'],
			'{t4}': ['10'],
			'{t5}': [null, '15'],
			'{t6}': [null, '15'],
			'{t7}': [null, '5']
		}
	},
	"6556": {
		name: "Class Mastery II (PVP)",
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
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '5'],
			'{t6}': [null, '5'],
			'{t7}': [null, '5']
		}
	},
	"6319": {
		name: "Summon Shadow (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Assassin SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Creates clones of yourself that will attack enemies with your skills for a short time.<br></color_w><color_y>Physical Damage: {t5}%<br></color_y><color_y>10% of Summoner's HP<br></color_y><color_y>Duration: {t6} sec<br></color_y><color_y>Number of Clones: {t7}<br></color_y><color_y>Uses the same skills as you.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '60'],
			'{t3}': ['35', '70'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '50', '100'],
			'{t6}': [null, '5', '5'],
			'{t7}': [null, '1', '1']
		}
	},
	"6016": {
		name: "Decoy (PVP)",
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
	"6218": {
		name: "Dedicate Shadow (PVP)",
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
			'{t5}': [null, '17'],
			'{t6}': [null, '37.5'],
			'{t7}': [null, '3']
		}
	},
	"6005": {
		name: "Shadow Hand (PVP)",
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
			'{t5}': [null, 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 175%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 177%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 180%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 182%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 185%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 205%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 207%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 210%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 213%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 215%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 290%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 294%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 305%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 310%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 317%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 351%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 357%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 363%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 370%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 376%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 414%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 422%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 430%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 439%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 448%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 458%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 468%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>", "Sends illusions of yourself in all directions to create a powerful shock wave.<br><color_y>High chance to destroy Super Armor<br>Damage: 478%<br><br>Shortens the shock wave's range and increases the casting speed.<br>Additional Damage: 25%</color_y>"]		}
	},
	"6707": {
		name: "Dark Line EX (PVP)",
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
		name: "Healing Chakra (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Strike Ring Lv. 1<br>Assassin SP Total 40 or above<br>SP {t4}",
			'effect': "<color_w>Focus your energies to unleash chakras that invigorate you and your whole party. The chakra will pulse at progressively shorter intervals until it fades away. Press the </color_w><color_y>Special Attack Button</color_y><color_w> after the attack to dash out of the way after casting.<br></color_w><color_y>Each Chakra:<br></color_y><color_y>Restores {t5}% MP<br></color_y><color_y>Buff Range: {t6}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['32'],
			'{t4}': ['10'],
			'{t5}': [null, '1.13'],
			'{t6}': [null, '5']
		}
	},
	"6503": {
		name: "Barrage EX (PVP)",
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
		name: "Swift Cut (PVP)",
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
			'{t5}': [null, 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 113%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 115%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 117%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 119%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 121%</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 130%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 132%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 134%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 137%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 139%<br>Max Cooldown Charge: 1</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 149%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 154%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 157%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 160%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 170%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 186%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 191%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 196%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 201%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 206%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 224%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 230%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 236%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 243%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 250%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 274%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 283%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 292%<br>Max Cooldown Charge: 2</color_y>', 'Delivers a quick slash to the enemy. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Damage: 302%<br>Max Cooldown Charge: 2</color_y>']		}
	},
	"6004": {
		name: "Fan of Blades (PVP)",
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
			'{t5}': [null, '103', '104', '104', '104', '104', '105', '105', '105', '105', '106', '108', '108', '109', '112', '113', '116', '118', '119', '120', '122', '126', '128', '130', '132', '134', '136', '139', '141']
		}
	},
	"6550": {
		name: "Class Mastery (PVP)",
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
			'{t6}': [null, '10'],
			'{t7}': [null, '37.55'],
			'{t8}': [null, '3']
		}
	},
	"6017": {
		name: "Aerial Evasion (PVP)",
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
		name: "Rain of Death (PVP)",
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
			'{t5}': [null, 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 40.8%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 40.9%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 41.0%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 42.0%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 42.1%</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 42.9%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 43.1%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 43.2%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 43.3%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 43.5%<br>Max Cooldown Charge: 1</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 44.3%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 44.4%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 44.6%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 44.7%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 44.9%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 45.8%<br>Max Cooldown Charge: 2</color_y>', 'Sends a crow up into the sky that rains down throwing knives. Charges additional cooldown at skill levels 6 and 11.<br><color_y>Dark Magic<br>Damage per Dagger: 46.0%<br>Max Cooldown Charge: 2</color_y>']		}
	},
	"6705": {
		name: "Illusion Strike EX (PVP)",
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
		name: "Darkness Incarnate (PVP)",
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
			'{t5}': [null, '7'],
			'{t6}': [null, '10']
		}
	},
	"6206": {
		name: "Overkill (PVP)",
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
			'{t5}': [null, '104', '106'],
			'{t6}': [null, '50', '50']
		}
	},
	"6014": {
		name: "Leap Kick (PVP)",
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
			'{t5}': [null, '129']
		}
	},
	"6313": {
		name: "Spectral Blades (PVP)",
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
			'{t5}': [null, '152', '155', '158', '160', '169', '186', '195', '202', '209', '216', '232', '241', '252']
		}
	},
	"6316": {
		name: "Blessing of Azuna (PVP)",
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
			'{t2}': ['60', '60'],
			'{t3}': ['20'],
			'{t4}': ['3'],
			'{t5}': [null, '5'],
			'{t6}': [null, '8'],
			'{t7}': [null, '8'],
			'{t8}': [null, '30'],
			'{t9}': [null, '30']
		}
	},
	"6015": {
		name: "Smoke Bomb (PVP)",
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
			'{t5}': [null, '129']
		}
	},
	"6020": {
		name: "Attuned Mind (PVP)",
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
		name: "Miraculous Chakra (PVP)",
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
			'{t5}': [null, '15.0']
		}
	},
	"6307": {
		name: "Night Burst (PVP)",
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
			'{t5}': [null, '205', '207', '210', '212', '214', '232', '235', '245', '249', '254', '276', '281', '286', '291', '297', '323', '329', '336', '344'],
			'{t6}': [null, '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%', '15%'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"6803": {
		name: "쉬프트 블로우 (애쉬 소환) (PVP)",
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
			'{t5}': [null, '205', '208', '211', '214', '218', '232', '238', '243', '247', '259', '280', '288', '295', '301', '308', '333', '340', '348', '357', '366', '397']
		}
	},
	"6006": {
		name: "Triple Blade (PVP)",
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
			'{t5}': [null, '88.3', '88.4', '88.6', '88.8', '88.9', '91.2', '91.4', '91.6', '91.8', '92.0', '94.4', '94.9', '95.2', '95.4', '95.7', '98.4', '98.7', '99.0', '99.3', '99.7', '102.7', '103.1', '103.5', '103.9', '104.3', '104.7', '105.1']
		}
	},
	"6306": {
		name: "Pulse Ring (PVP)",
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
			'{t5}': [null, '70', '70'],
			'{t6}': [null, '70', '70'],
			'{t7}': [null, '10', '10'],
			'{t8}': [null, '1213', '1247']
		}
	},
	"6551": {
		name: "Class Mastery (PVP)",
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
		name: "레이크 EX 인스턴트 (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Chain Punisher can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86', '89'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"6008": {
		name: "Feint (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Pulls you from the brink of death and restores some HP.<br>Not activated with skills that give partial additional damage.<br><color_y>Health Restored: {t5}% of Max HP<br>Invincibility Duration: {t6} sec<br></color_y><color_y>Cooldown does not reset after revival<br>Cooldown: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['300', '300'],
			'{t3}': ['10'],
			'{t4}': ['10'],
			'{t5}': [null, '5'],
			'{t6}': [null, '3'],
			'{t7}': [null, '300']
		}
	},
	"6507": {
		name: "Shinobi Drop EX (PVP)",
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
		name: "Blade Runner EX (PVP)",
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
			'{t7}': [null, '10']
		}
	},
	"6404": {
		name: "Iron Applause EX (PVP)",
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
	"6210": {
		name: "Blade Runner (PVP)",
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
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '184', '186', '188', '190', '194', '210', '213', '221', '226', '230', '250', '255', '259', '263', '268', '292', '298', '304', '310']
		}
	},
	"6708": {
		name: "Nightfall EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Dagger",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nightfall Lv. 1<br>SP {t4}",
			'effect': "Enhances Nightfall. Increases the mantle's duration. The fire in the middle of the mantle deals an additional {t5}% damage.<br>Mantle Duration +{t6}%",
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
		name: "Dead Fall (PVP)",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '481', '496', '511', '526', '541', '612', '631', '651', '672', '694', '781', '808', '837']
		}
	},
	"6405": {
		name: "Raking Stars EX (PVP)",
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
		name: "Air Sprint (PVP)",
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
		name: "Gore Kick (PVP)",
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
		name: "Class Mastery II (PVP)",
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
		name: "Mental Fortitude (PVP)",
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
		name: "Chakra Cure (PVP)",
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
			'{t2}': ['60', '60'],
			'{t3}': ['21'],
			'{t4}': ['3'],
			'{t5}': [null, '1'],
			'{t6}': [null, '60']
		}
	},
	"6002": {
		name: "Dirty Trick (PVP)",
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
			'{t5}': [null, 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 138%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 139%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 141%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 142%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br>Damage: 144%<br><br>(The effect is enhanced at skill lv. 6.)</color_w>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 157%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 159%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 160%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 162%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 164%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 209%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 213%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 216%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 218%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 225%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 246%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 249%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 253%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 257%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 260%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 282%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 287%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 291%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 296%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 301%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 306%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 311%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 316%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>', 'Throw dirt to blind the enemy, then jump forward and strike the enemy down. Press <color_y>regular attack</color_y><color_w> while throwing dirt to activate this skill.<br></color_w><color_y>Damage: 322%<br><br>Push enemies back when striking them down.<br>Additional Damage: 25%</color_y>']		}
	},
	"6202": {
		name: "Iron Applause (PVP)",
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
			'{t5}': [null, '215', '218', '220', '223', '225', '244', '249', '253', '262', '266', '291', '296', '301', '306', '311', '338', '344', '350', '357', '364'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"6401": {
		name: "Umbra (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Overkill Lv. 1<br>Shinobi SP Total 65 or above<br>SP {t4}",
			'effect': "Creates a shadow zone in a ring around you. Enemies in the shadow have decreased action speed and take damage.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Action Speed: -{t6}%<br>Duration: 10 sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '477', '500', '521', '542', '564', '643', '670', '699', '730', '764'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"6201": {
		name: "Open Edge (PVP)",
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
			'{t5}': [null, '187', '189', '192', '194', '197', '209', '215', '219', '223', '236', '254', '263', '269', '275', '282', '305', '312', '320', '329', '338', '368']
		}
	}
});