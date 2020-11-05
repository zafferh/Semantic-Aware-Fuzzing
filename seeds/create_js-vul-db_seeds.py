# This script copies all lines between two identifiers and writes them to two new files (one in a ..._seeds
# directory and one in a combined directory).
#
# Sam Hanson, 2019

import os

# Copies lines between two lines which contain the equivalent identifiers
js_identifier = "```"


def CopyAndWriteJS(filename, file_dir, new_dir, combined_dir):

    new_filename = filename[:-3] + "_seed.js"
    lines = []
    isJS = False

    # Open a read-in file and both write-out files (..._seed and combined dirs)
    with open(combined_dir + "/" + new_filename, "w") as combined_file:
        with open(new_dir + "/" + new_filename, "w") as new_file:
            with open(file_dir + "/" + filename, "r") as file:

                for line in file:
                    # Check to make sure it's between the identifiers (and not including identifiers)
                    if isJS and not (js_identifier in line):
                        lines.append(line)
                    if js_identifier in line:
                        isJS = ~isJS

            for line in lines:
                new_file.write(line)
                combined_file.write(line)


# Main:

# Directories to traverse files and copy lines from
directories = ["v8", "chakra", "jsc", "spidermonkey"]

for di in directories:

    # Create new seed directories
    new_di = di + "_seeds"
    if not os.path.exists(new_di):
        os.mkdir(new_di)

    combined_di = "combined_seeds"
    if not os.path.exists(combined_di):
        os.mkdir(combined_di)

    for file in os.listdir(di):
        CopyAndWriteJS(file, di, new_di, combined_di)
