import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.estrongs.android.pop',
  name: 'ES文件浏览器',
  groups: [
    {
      key: 0,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.fighter.loader.view.InteractTemplateAdDialog',
          matches: '[id="com.estrongs.android.pop:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12509667',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches:
            '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^="立即" || text="查看详情" || text="了解更多" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
          snapshotUrls: 'https://i.gkd.li/i/12509669',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告',
      activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
      fastQuery: true,
      rules: [
        {
          key: 0,
          matches:
            'ImageView - LinearLayout >(2) ImageView[id="com.estrongs.android.pop:id/close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/12674919'],
        },
        {
          key: 1,
          matches:
            '@[id="com.estrongs.android.pop:id/close"] + [id="com.estrongs.android.pop:id/ad_flag_source"]',
          snapshotUrls: ['https://i.gkd.li/i/12818281'],
        },
        {
          key: 2,
          matches: '[vid="close_b_t_a_i_b_no_compliance"]',
          snapshotUrls: 'https://i.gkd.li/i/13842299',
        },
      ],
    },
  ],
});
