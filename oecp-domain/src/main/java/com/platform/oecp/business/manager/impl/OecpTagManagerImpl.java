package com.platform.oecp.business.manager.impl;

import com.platform.oecp.models.dos.OecpTagDO;
import com.platform.oecp.models.qc.OecpTagQC;
import red.lixiang.tools.jdk.ListTools;
import com.platform.oecp.business.manager.OecpTagManager;
import com.platform.oecp.dao.OecpTagMapper;
import red.lixiang.tools.common.mybatis.model.Page;
import red.lixiang.tools.common.mybatis.model.Sort;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class OecpTagManagerImpl implements OecpTagManager{

    @Autowired
    private OecpTagMapper oecpTagMapper;
    
    @Override
    public OecpTagDO getOecpTagById(Long id) {
        OecpTagQC qc = new OecpTagQC();
        qc.setId(id);
        qc.setPage(Page.getOne());
        List<OecpTagDO> oecpTagDOS = queryOecpTag(qc);
        return ListTools.getOne(oecpTagDOS);
    }
    

    @Override
    public List<OecpTagDO> queryOecpTag(OecpTagQC qc){

        List<OecpTagDO> oecpTags = oecpTagMapper.listOecpTags(qc);
        return oecpTags;
    }
    

    @Override
    public Long countOecpTag(OecpTagQC qc){

        Long count = oecpTagMapper.countOecpTags(qc);
        return count;
    }

    @Override
    public OecpTagDO saveOecpTag(OecpTagDO oecpTag){

        if(oecpTag.getId()!=null){
             oecpTagMapper.updateOecpTag(oecpTag);
        }else {
            oecpTag.setCreateDate(new Date());
             oecpTagMapper.insertOecpTag(oecpTag);
        }
        return oecpTag;

    }

    @Override
    public int removeOecpTagById(Long id){

        return oecpTagMapper.removeOecpTagById(id);

    }


}