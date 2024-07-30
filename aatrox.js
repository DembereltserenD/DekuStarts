const champions = [
    { name: "Aatrox", img: "Aatrox.jpg", href: "Aatrox-guide.html", lane: "Baron" },
    { name: "Ahri", img: "https://www.mobafire.com/images/champion/square/ahri.png", href: "Ahri-guide.html", lane: "Mid" },
    { name: "Akali", img: "https://www.mobafire.com/images/champion/square/akali.png", href: "Akali-guide.html", lane: "Baron Mid" },
    { name: "Akshan", img: "https://www.mobafire.com/images/champion/square/akshan.png", href: "/guide/akshan", lane: "Mid" },
    { name: "Alistar", img: "https://www.mobafire.com/images/champion/square/alistar.png", href: "/guide/alistar", lane: "Support" },
    { name: "Amumu", img: "https://www.mobafire.com/images/champion/square/amumu.png", href: "/guide/amumu", lane: "Jungle" },
    { name: "Annie", img: "https://www.mobafire.com/images/champion/square/annie.png", href: "/guide/annie", lane: "Mid" },
    { name: "Ashe", img: "https://www.mobafire.com/images/champion/square/ashe.png", href: "/guide/ashe", lane: "Duo" },
    { name: "Aurelion Sol", img: "https://www.mobafire.com/images/champion/square/aurelion-sol.png", href: "/guide/aurelion-sol", lane: "Mid" },
    { name: "Blitzcrank", img: "https://www.mobafire.com/images/champion/square/blitzcrank.png", href: "/guide/blitzcrank", lane: "Support" },
    { name: "Brand", img: "https://www.mobafire.com/images/champion/square/brand.png", href: "/guide/brand", lane: "Mid Support" },
    { name: "Braum", img: "https://www.mobafire.com/images/champion/square/braum.png", href: "/guide/braum", lane: "Support" },
    { name: "Caitlyn", img: "https://www.mobafire.com/images/champion/square/caitlyn.png", href: "/guide/caitlyn", lane: "Duo" },
    { name: "Camille", img: "https://www.mobafire.com/images/champion/square/camille.png", href: "/guide/camille", lane: "Baron Jungle" },
    { name: "Corki", img: "https://www.mobafire.com/images/champion/square/corki.png", href: "/guide/corki", lane: "Mid Duo" },
    { name: "Darius", img: "https://www.mobafire.com/images/champion/square/darius.png", href: "/guide/darius", lane: "Baron Jungle" },
    { name: "Diana", img: "https://www.mobafire.com/images/champion/square/diana.png", href: "/guide/diana", lane: "Mid Jungle" },
    { name: "Dr. Mundo", img: "/drmundo.png", href: "/guide/dr-mundo", lane: "Baron Jungle" },
    { name: "Draven", img: "https://www.mobafire.com/images/champion/square/draven.png", href: "/guide/draven", lane: "Duo" },
    { name: "Ekko", img: "https://www.mobafire.com/images/champion/square/ekko.png", href: "/guide/ekko", lane: "Mid Jungle" },
    { name: "Evelynn", img: "https://www.mobafire.com/images/champion/square/evelynn.png", href: "/guide/evelynn", lane: "Jungle" },
    { name: "Ezreal", img: "https://www.mobafire.com/images/champion/square/ezreal.png", href: "/guide/ezreal", lane: "Duo" },
    { name: "Fiddlesticks", img: "https://www.mobafire.com/images/champion/square/fiddlesticks.png", href: "/guide/fiddlesticks", lane: "Jungle" },
    { name: "Fiora", img: "https://www.mobafire.com/images/champion/square/fiora.png", href: "/guide/fiora", lane: "Baron Jungle" },
    { name: "Fizz", img: "https://www.mobafire.com/images/champion/square/fizz.png", href: "/guide/fizz", lane: "Mid Jungle" },
    { name: "Galio", img: "https://www.mobafire.com/images/champion/square/galio.png", href: "/guide/galio", lane: "Mid Support" },
    { name: "Garen", img: "https://www.mobafire.com/images/champion/square/garen.png", href: "/guide/garen", lane: "Baron" },
    { name: "Gragas", img: "https://www.mobafire.com/images/champion/square/gragas.png", href: "/guide/gragas", lane: "Baron Mid Jungle Support" },
    { name: "Graves", img: "https://www.mobafire.com/images/champion/square/graves.png", href: "/guide/graves", lane: "Jungle" },
    { name: "Gwen", img: "https://www.mobafire.com/images/champion/square/gwen.png", href: "/guide/gwen", lane: "Baron Jungle" },
    { name: "Hecarim", img: "/hecarim.png", href: "/guide/hecarim", lane: "Jungle" },
    { name: "Irelia", img: "https://www.mobafire.com/images/champion/square/irelia.png", href: "/guide/irelia", lane: "Baron Mid Jungle" },
    { name: "Janna", img: "https://www.mobafire.com/images/champion/square/janna.png", href: "/guide/janna", lane: "Support" },
    { name: "Jarvan IV", img: "https://www.mobafire.com/images/champion/square/jarvan-iv.png", href: "/guide/jarvan-iv", lane: "Jungle" },
    { name: "Jax", img: "https://www.mobafire.com/images/champion/square/jax.png", href: "/guide/jax", lane: "Baron" },
    { name: "Jayce", img: "https://www.mobafire.com/images/champion/square/jayce.png", href: "/guide/jayce", lane: "Baron Mid Jungle" },
    { name: "Jhin", img: "https://www.mobafire.com/images/champion/square/jhin.png", href: "/guide/jhin", lane: "Duo" },
    { name: "Jinx", img: "https://www.mobafire.com/images/champion/square/jinx.png", href: "/guide/jinx", lane: "Duo" },
    { name: "Kai'Sa", img: "https://www.mobafire.com/images/champion/square/kaisa.png", href: "/guide/kaisa", lane: "Duo Mid" },
    { name: "Kalista", img: "https://www.mobafire.com/images/champion/square/kalista.png", href: "/guide/kalista", lane: "Duo" },
    { name: "Karma", img: "https://www.mobafire.com/images/champion/square/karma.png", href: "/guide/karma", lane: "Mid Support" },
    { name: "Kassadin", img: "https://www.mobafire.com/images/champion/square/kassadin.png", href: "/guide/kassadin", lane: "Mid" },
    { name: "Katarina", img: "https://www.mobafire.com/images/champion/square/katarina.png", href: "/guide/katarina", lane: "Mid" },
    { name: "Kayle", img: "https://www.mobafire.com/images/champion/square/kayle.png", href: "/guide/kayle", lane: "Baron Mid" },
    { name: "Kayn", img: "https://www.mobafire.com/images/champion/square/kayn.png", href: "/guide/kayn", lane: "Jungle" },
    { name: "Kennen", img: "https://www.mobafire.com/images/champion/square/kennen.png", href: "/guide/kennen", lane: "Baron Mid" },
    { name: "Kha'Zix", img: "https://www.mobafire.com/images/champion/square/khazix.png", href: "/guide/khazix", lane: "Jungle" },
    { name: "Kindred", img: "https://www.mobafire.com/images/champion/square/kindred.png", href: "/guide/kindred", lane: "Jungle" },
    { name: "Kled", img: "https://www.mobafire.com/images/champion/square/kled.png", href: "/guide/kled", lane: "Baron Jungle" },
    { name: "Lee Sin", img: "https://www.mobafire.com/images/champion/square/lee-sin.png", href: "/guide/lee-sin", lane: "Jungle" },
    { name: "Leona", img: "https://www.mobafire.com/images/champion/square/leona.png", href: "/guide/leona", lane: "Support" },
    { name: "Lillia", img: "https://www.mobafire.com/images/champion/square/lillia.png", href: "/guide/lillia", lane: "Jungle" },
    { name: "Lissandra", img: "https://www.mobafire.com/images/champion/square/lissandra.png", href: "/guide/lissandra", lane: "Mid" },
    { name: "Lucian", img: "https://www.mobafire.com/images/champion/square/lucian.png", href: "/guide/lucian", lane: "Duo Mid" },
    { name: "Lulu", img: "https://www.mobafire.com/images/champion/square/lulu.png", href: "/guide/lulu", lane: "Support" },
    { name: "Lux", img: "https://www.mobafire.com/images/champion/square/lux.png", href: "/guide/lux", lane: "Mid Support" },
    { name: "Malphite", img: "https://www.mobafire.com/images/champion/square/malphite.png", href: "/guide/malphite", lane: "Baron Jungle" },
    { name: "Maokai", img: "https://www.mobafire.com/images/champion/square/maokai.png", href: "/guide/maokai", lane: "Baron Jungle" },
    { name: "Master Yi", img: "https://www.mobafire.com/images/champion/square/master-yi.png", href: "/guide/master-yi", lane: "Jungle" },
    { name: "Miss Fortune", img: "https://www.mobafire.com/images/champion/square/miss-fortune.png", href: "/guide/miss-fortune", lane: "Duo" },
    { name: "Mordekaiser", img: "https://www.mobafire.com/images/champion/square/mordekaiser.png", href: "/guide/mordekaiser", lane: "Baron Jungle" },
    { name: "Morgana", img: "https://www.mobafire.com/images/champion/square/morgana.png", href: "/guide/morgana", lane: "Support" },
    { name: "Nami", img: "https://www.mobafire.com/images/champion/square/nami.png", href: "/guide/nami", lane: "Support" },
    { name: "Nasus", img: "https://www.mobafire.com/images/champion/square/nasus.png", href: "/guide/nasus", lane: "Baron Jungle" },
    { name: "Nautilus", img: "https://www.mobafire.com/images/champion/square/nautilus.png", href: "/guide/nautilus", lane: "Support" },
    { name: "Nunu & Willump", img: "https://www.mobafire.com/images/champion/square/nunu.png", href: "/guide/nunu", lane: "Jungle" },
    { name: "Olaf", img: "https://www.mobafire.com/images/champion/square/olaf.png", href: "/guide/olaf", lane: "Jungle" },
    { name: "Orianna", img: "https://www.mobafire.com/images/champion/square/orianna.png", href: "/guide/orianna", lane: "Mid" },
    { name: "Ornn", img: "https://www.mobafire.com/images/champion/square/ornn.png", href: "/guide/ornn", lane: "Baron" },
    { name: "Pantheon", img: "https://www.mobafire.com/images/champion/square/pantheon.png", href: "/guide/pantheon", lane: "Baron Mid" },
    { name: "Rakan", img: "https://www.mobafire.com/images/champion/square/rakan.png", href: "/guide/rakan", lane: "Support" },
    { name: "Rammus", img: "https://www.mobafire.com/images/champion/square/rammus.png", href: "/guide/rammus", lane: "Jungle" },
    { name: "Renekton", img: "https://www.mobafire.com/images/champion/square/renekton.png", href: "/guide/renekton", lane: "Baron Jungle" },
    { name: "Riven", img: "https://www.mobafire.com/images/champion/square/riven.png", href: "/guide/riven", lane: "Baron Mid Jungle" },
    { name: "Samira", img: "https://www.mobafire.com/images/champion/square/samira.png", href: "/guide/samira", lane: "Duo" },
    { name: "Senna", img: "https://www.mobafire.com/images/champion/square/senna.png", href: "/guide/senna", lane: "Duo" },
    { name: "Seraphine", img: "https://www.mobafire.com/images/champion/square/seraphine.png", href: "/guide/seraphine", lane: "Mid Support" },
    { name: "Sett", img: "https://www.mobafire.com/images/champion/square/sett.png", href: "/guide/sett", lane: "Baron Jungle" },
    { name: "Shaco", img: "https://www.mobafire.com/images/champion/square/shaco.png", href: "/guide/shaco", lane: "Jungle" },
    { name: "Shen", img: "https://www.mobafire.com/images/champion/square/shen.png", href: "/guide/shen", lane: "Baron Jungle" },
    { name: "Shyvana", img: "https://www.mobafire.com/images/champion/square/shyvana.png", href: "/guide/shyvana", lane: "Jungle" },
    { name: "Sion", img: "https://www.mobafire.com/images/champion/square/sion.png", href: "/guide/sion", lane: "Baron Jungle" },
    { name: "Sivir", img: "https://www.mobafire.com/images/champion/square/sivir.png", href: "/guide/sivir", lane: "Duo" },
    { name: "Sona", img: "https://www.mobafire.com/images/champion/square/sona.png", href: "/guide/sona", lane: "Support" },
    { name: "Soraka", img: "https://www.mobafire.com/images/champion/square/soraka.png", href: "/guide/soraka", lane: "Support" },
    { name: "Swain", img: "https://www.mobafire.com/images/champion/square/swain.png", href: "/guide/swain", lane: "Mid" },
    { name: "Syndra", img: "https://www.mobafire.com/images/champion/square/syndra.png", href: "/guide/syndra", lane: "Mid" },
    { name: "Teemo", img: "https://www.mobafire.com/images/champion/square/teemo.png", href: "/guide/teemo", lane: "Baron" },
    { name: "Thresh", img: "https://www.mobafire.com/images/champion/square/thresh.png", href: "/guide/thresh", lane: "Support" },
    { name: "Tristana", img: "https://www.mobafire.com/images/champion/square/tristana.png", href: "/guide/tristana", lane: "Duo" },
    { name: "Tryndamere", img: "https://www.mobafire.com/images/champion/square/tryndamere.png", href: "/guide/tryndamere", lane: "Baron Jungle" },
    { name: "Twisted Fate", img: "https://www.mobafire.com/images/champion/square/twisted-fate.png", href: "/guide/twisted-fate", lane: "Mid" },
    { name: "Twitch", img: "https://www.mobafire.com/images/champion/square/twitch.png", href: "/guide/twitch", lane: "Duo" },
    { name: "Urgot", img: "https://www.mobafire.com/images/champion/square/urgot.png", href: "/guide/urgot", lane: "Baron Jungle" },
    { name: "Varus", img: "https://www.mobafire.com/images/champion/square/varus.png", href: "/guide/varus", lane: "Duo Mid" },
    { name: "Vayne", img: "https://www.mobafire.com/images/champion/square/vayne.png", href: "/guide/vayne", lane: "Duo" },
    { name: "Veigar", img: "https://www.mobafire.com/images/champion/square/veigar.png", href: "/guide/veigar", lane: "Mid" },
    { name: "Vex", img: "https://www.mobafire.com/images/champion/square/vex.png", href: "/guide/vex", lane: "Mid" },
    { name: "Vladimir", img: "https://www.mobafire.com/images/champion/square/vladimir.png", href: "/guide/vladimir", lane: "Mid" },
    { name: "Volibear", img: "https://www.mobafire.com/images/champion/square/volibear.png", href: "/guide/volibear", lane: "Baron Jungle" },
    { name: "Warwick", img: "https://www.mobafire.com/images/champion/square/warwick.png", href: "/guide/warwick", lane: "Jungle" },
    { name: "Wukong", img: "https://www.mobafire.com/images/champion/square/wukong.png", href: "/guide/wukong", lane: "Baron Jungle" },
    { name: "Xayah", img: "https://www.mobafire.com/images/champion/square/xayah.png", href: "/guide/xayah", lane: "Duo" },
    { name: "Xin Zhao", img: "https://www.mobafire.com/images/champion/square/xin-zhao.png", href: "/guide/xin-zhao", lane: "Jungle" },
    { name: "Yasuo", img: "https://www.mobafire.com/images/champion/square/yasuo.png", href: "/guide/yasuo", lane: "Mid" },
    { name: "Yone", img: "https://www.mobafire.com/images/champion/square/yone.png", href: "/guide/yone", lane: "Mid" },
    { name: "Zed", img: "https://www.mobafire.com/images/champion/square/zed.png", href: "/guide/zed", lane: "Mid" },
    { name: "Zeri", img: "https://www.mobafire.com/images/champion/square/zeri.png", href: "/guide/zeri", lane: "Duo" },
    { name: "Ziggs", img: "https://www.mobafire.com/images/champion/square/ziggs.png", href: "/guide/ziggs", lane: "Mid" },
    { name: "Zoe", img: "https://www.mobafire.com/images/champion/square/zoe.png", href: "/guide/zoe", lane: "Mid" },
    { name: "Zyra", img: "https://www.mobafire.com/images/champion/square/zyra.png", href: "/guide/zyra", lane: "Support" },
    { 
        name: "Nilah", 
        img: "nilah.png", 
        href: "/guide/nilah", 
        lane: "Duo" 
    }
  ]
  document.addEventListener('DOMContentLoaded', function() {
    const range = document.getElementById('range');
    const rangeValue = document.getElementById('rangeV');
    const statLevel = document.getElementById('stat-level');
    const statsBlocks = {
        health: document.querySelector('.statsBlock__block:nth-child(1) .value'),
        healthReg: document.querySelector('.statsBlock__block:nth-child(2) .value'),
        armor: document.querySelector('.statsBlock__block:nth-child(3) .value'),
        magicRes: document.querySelector('.statsBlock__block:nth-child(4) .value'),
        moveSpeed: document.querySelector('.statsBlock__block:nth-child(5) .value'),
        attackDmg: document.querySelector('.statsBlock__block:nth-child(6) .value'),
        attackSpd: document.querySelector('.statsBlock__block:nth-child(7) .value'),
    };

    const statsByLevel = {
        1: { health: 600, healthReg: 6, armor: 40, magicRes: 40, moveSpeed: 355, attackDmg: 62, attackSpd: 0.73 },
        2: { health: 695, healthReg: 7, armor: 44, magicRes: 42, moveSpeed: 355, attackDmg: 67, attackSpd: 0.74 },
        3: { health: 790, healthReg: 8, armor: 48, magicRes: 44, moveSpeed: 355, attackDmg: 72, attackSpd: 0.75 },
        4: { health: 885, healthReg: 9, armor: 52, magicRes: 46, moveSpeed: 355, attackDmg: 77, attackSpd: 0.75 },
        5: { health: 980, healthReg: 10, armor: 56, magicRes: 48, moveSpeed: 355, attackDmg: 82, attackSpd: 0.76 },
        6: { health: 1075, healthReg: 11, armor: 60, magicRes: 50, moveSpeed: 355, attackDmg: 87, attackSpd: 0.77 },
        7: { health: 1170, healthReg: 12, armor: 64, magicRes: 52, moveSpeed: 355, attackDmg: 92, attackSpd: 0.78 },
        8: { health: 1265, healthReg: 13, armor: 68, magicRes: 54, moveSpeed: 355, attackDmg: 97, attackSpd: 0.79 },
        9: { health: 1360, healthReg: 14, armor: 72, magicRes: 56, moveSpeed: 355, attackDmg: 102, attackSpd: 0.79 },
        10: { health: 1455, healthReg: 15, armor: 76, magicRes: 58, moveSpeed: 355, attackDmg: 107, attackSpd: 0.80 },
        11: { health: 1550, healthReg: 16, armor: 80, magicRes: 60, moveSpeed: 355, attackDmg: 112, attackSpd: 0.81 },
        12: { health: 1645, healthReg: 17, armor: 84, magicRes: 62, moveSpeed: 355, attackDmg: 117, attackSpd: 0.82 },
        13: { health: 1740, healthReg: 18, armor: 88, magicRes: 64, moveSpeed: 355, attackDmg: 122, attackSpd: 0.83 },
        14: { health: 1835, healthReg: 19, armor: 92, magicRes: 66, moveSpeed: 355, attackDmg: 127, attackSpd: 0.84 },
        15: { health: 1930, healthReg: 20, armor: 96, magicRes: 68, moveSpeed: 355, attackDmg: 132, attackSpd: 0.84 }
    };

    function updateStats(level) {
        if (statsByLevel[level]) {
            const stats = statsByLevel[level];
            statLevel.textContent = level;
            statsBlocks.health.textContent = stats.health;
            statsBlocks.healthReg.textContent = stats.healthReg;
            statsBlocks.armor.textContent = stats.armor;
            statsBlocks.magicRes.textContent = stats.magicRes;
            statsBlocks.moveSpeed.textContent = stats.moveSpeed;
            statsBlocks.attackDmg.textContent = stats.attackDmg;
            statsBlocks.attackSpd.textContent = stats.attackSpd;
        }
    }

    range.addEventListener('input', function() {
        const level = this.value;
        rangeValue.textContent = `Level ${level}`;
        updateStats(level);
    });

    // Handle stats toggle
    const hideStatsButton = document.querySelector('.hide-champ-stats');
    const statsMain = document.querySelector('.wf-champion__about__stats__main');
    hideStatsButton.addEventListener('click', function() {
        const isHidden = statsMain.style.display === 'none';
        statsMain.style.display = isHidden ? 'block' : 'none';
        hideStatsButton.innerHTML = `<i class="fas fa-chevron-${isHidden ? 'up' : 'down'}"></i> ${isHidden ? 'Hide' : 'Show'} Champ Stats`;
    });

    // Initialize
    range.value = 1;
    rangeValue.textContent = `Level ${range.value}`;
    updateStats(parseInt(range.value, 10));
});

