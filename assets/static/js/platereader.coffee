canvas = document.getElementById("e");
context = canvas.getContext("2d");
colony_gap = 40;

window.read_data = (raw_string) =>
    window.avgs = []
    window.data = []
    raw_data_lines = raw_string.split('<Begin Data>')[1].split('\n')
    first = true
    for line in raw_data_lines
        if not line? or '\t' not in line then continue
        if first
            first = false
            continue
        window.data.push(line.split('\t'))

#    window.standard_stats = new Stats
    window.standard_stats2 = new Stats
    for sample in data
        [row, col, area] = sample
        if row in ["1", "16"] or col in ["1", "24"] then continue
        rad = Number(area)
        if row in ["1", "2"] then continue
#        if col in ["5", "6", "23", "24"] then window.standard_stats.sample(rad)
        if col in ["5", "6"] then window.standard_stats2.sample(rad)
    standard_mean = window.standard_stats2.mean
#    window.normalized_stats = new Stats
    window.normalized_stats2 = new Stats
    window.global_stats2 = new Stats
    for sample in data
        [row, col, area] = sample
        if row in ["1", "16"] or col in ["1", "24"] then continue
        avg_row = window.avgs[Math.floor((row-1)/2)] ?= []
        stats = avg_row[Math.floor((col-1)/2)] ?= new Stats
        rad = Number(area) / standard_mean
        if rad <= 0 then continue
        stats.sample(rad)
        window.global_stats2.sample(rad)
        if row in ["1", "2"] then continue
#        if col in ["5", "6", "23", "24"] then window.normalized_stats.sample(rad)
        if col in ["5", "6"] then window.normalized_stats2.sample(rad)
    mean1 = window.normalized_stats2.mean.toFixed(3)
    sd1 = window.normalized_stats2.sd.toFixed(3)
    mean2 = window.global_stats2.mean.toFixed(3)
    sd2 = window.global_stats2.sd.toFixed(3)
    window.fill_table()
    document.getElementById("place_for_stats").value = "WT #{mean1} / #{sd1} -- General #{mean2} / #{sd2}"


window.draw_raw = () =>
    context.fillStyle = "#000";
    for sample in data
        [row, col, area] = sample
        context.beginPath();
        rad = Math.sqrt(area/Math.PI)
        x = col * colony_gap;
        y = row * colony_gap;
        context.arc(x, y, rad, 0, Math.PI * 2, false);
        context.closePath();
        context.fill();



window.clear_canvas = () =>
    canvas.width = canvas.width
    canvas.width = canvas.width



window.draw_avg = () =>
    top = window.normalized_stats2.mean + 2*window.normalized_stats2.sd
    bottom = window.normalized_stats2.mean - 2*window.normalized_stats2.sd
    for i in [0...(window.avgs.length)]
        for j in [0...(window.avgs[i].length)]
            stats = window.avgs[i][j];
            if stats.n == 0 then continue
            context.fillStyle = "#00bfff"
            context.fillStyle = "#FA8CA7" if bottom > stats.mean
            context.fillStyle = "#8CFABA" if stats.mean > top
            context.fillStyle = "#000" if (j == 2 or j == 11) and (i != 0)
            context.beginPath();
            x = (j+0.75) * colony_gap * 2;
            y = (i+0.75) * colony_gap * 2;
            context.arc(x, y, (stats.mean * 20), 0, Math.PI * 2, false);
            context.closePath();
            context.fill();

            context.strokeStyle = "#f00";
            x = (j+0.75) * colony_gap * 2;
            y = (i+0.75) * colony_gap * 2;
            wings = 4
            gap = (2 * Math.PI) / wings
            for w in [0...4]
                context.beginPath();
                context.arc(x, y, (stats.mean + stats.sd) * 20, (w*gap) - Math.PI / 32, (w*gap) + Math.PI / 32, false);
                context.stroke();

            context.fillStyle = "#00f";
            context.font = "bold 12px sans-serif";
            context.fillText(stats.mean.toFixed(4), x, y);



