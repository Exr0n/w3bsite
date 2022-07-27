import wandb

from PIL import Image


from os.path import join as path_join
from os import makedirs

RUN_PATH = "mics-fenet/fenet_model/q0cingdp"
KEY = 'eval/timely/decoder-preds-chart'

if __name__ == '__main__':
    api = wandb.Api()
    run = api.run(RUN_PATH)
    paths = []
    for file in run.files():
        if file.name.startswith(path_join('media/images', KEY)):
            file.download()
            paths.append(file.name)

    print('downloaded files')
    print([path_join('/flashback_images', path) for path in paths])
