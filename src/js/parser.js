
module.exports = function ParseData(data) {

    var org_pairs = data[0].rows;

    // rows gives array of array[3], 0: source, 1: dest, 2: value

    console.log(org_pairs);

    let sorted_org_pairs = org_pairs.sort((a, b) => b[2] - a[2])

    console.log("sorted")
    console.log(sorted_org_pairs);

    let top_10_pairs = sorted_org_pairs.slice(0, 10);

    console.log("top 10");
    console.log(top_10_pairs);

    // MAKE KEYS
    let source_orgs = [];
    let source_encoding = [];
    let counter = 0;
    for (i in top_10_pairs) {
        let new_org = top_10_pairs[i][0];
        let added = false;
        top_10_pairs[i].coords = [
            { "x": 0, "value": top_10_pairs[i][2] },
            { "x": 1 }]
        for (j in source_orgs) {
            if (source_orgs[j] == new_org) {
                added = true;
                source_encoding.push(parseInt(j));
                top_10_pairs[i].coords[0].y = parseInt(j);
                break;
            }
        }
        if (!added) {
            source_orgs.push(new_org);
            source_encoding.push(counter);
            top_10_pairs[i].coords[0].y = counter;
            counter++;
        }
    }

    console.log(source_orgs)
    console.log(source_encoding)

    // dest keys

    let dest_orgs = [];
    let dest_encoding = [];
    counter = 0;
    for (i in top_10_pairs) {
        let new_org = top_10_pairs[i][1];
        let added = false;
        for (j in dest_orgs) {
            if (dest_orgs[j] == new_org) {
                added = true;
                dest_encoding.push(parseInt(j));
                top_10_pairs[i].coords[1].y = parseInt(j);
                break;
            }
        }
        if (!added) {
            dest_orgs.push(new_org);
            dest_encoding.push(counter);
            top_10_pairs[i].coords[1].y = counter;
            counter++;
        }
    }

    console.log(dest_orgs)
    console.log(dest_encoding)


    // tick marks at source_orgs & dest_orgs, 
    // line y values at source_encoding & dest_encoding
    // line thickness relative to top_values

    console.log(top_10_pairs)

    let objToReturn = {
        srcOrgs: source_orgs,
        destOrgs: dest_orgs,
        topPairs: top_10_pairs
    }

    return objToReturn;
}

