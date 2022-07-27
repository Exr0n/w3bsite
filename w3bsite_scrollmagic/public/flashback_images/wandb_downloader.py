import wandb
from tqdm import tqdm
from natsort import natsorted   # for natural numeric sort without leading zeros, https://stackoverflow.com/a/18415320/10372825

from os.path import join as path_join
from os import makedirs
from itertools import islice

RUN_PATH, KEY, SEGMENT = "mics-bmi/FENet_Model/iem9ez9s", 'eval/eval/quantized_wl8_fl6/decoder-retrain', [8, 46]    # inc exc

if __name__ == '__main__':
    api = wandb.Api()
    run = api.run(RUN_PATH)
    paths = []

    correct_path_filter = lambda file: file.name.startswith(path_join('media/images', KEY))

    # cringe stuff to sort the filenames so that we can slice and only download the ones we want
    files_for_run = [(file.name, file) for file in filter(correct_path_filter, run.files())]
    files_for_run = natsorted(files_for_run)    # sort numerically but natural (w/o leading zero)

    for filename, file in tqdm(islice(files_for_run, *SEGMENT), total=SEGMENT[1]-SEGMENT[0]):
        file.download(replace=True)
        # file.download()

        paths.append(file.name)

    print('downloaded files')
    print([path_join('/flashback_images', path) for path in paths])
