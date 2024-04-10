import React from 'react';
import './Data.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportExportIcon from '@mui/icons-material/ImportExport';

const Data = () => {
  return (
    <div className='data'>
        <div className='data__header'>
            <div className='data_headerLeft'>
                <p>My Drive</p>
                <ArrowDropDownIcon />
            </div>
            <div className='data_headerRight'>
                <FilterListIcon />
                <InfoOutlinedIcon />
            </div>
        </div>

        <div className='data__content'>
            <div className='data_grid'>
                <div className='data___file'>
                    <InsertDriveFileIcon />
                    <p>File Name</p>
                </div>
                <div className='data___file'>
                    <InsertDriveFileIcon />
                    <p>File Name</p>
                </div>
                <div className='data___file'>
                    <InsertDriveFileIcon />
                    <p>File Name</p>
                </div>
                <div className='data___file'>
                    <InsertDriveFileIcon />
                    <p>File Name</p>
                </div>

            </div>
            <div className='data_list'>
                <div className='detailsRow'>
                    <p><b>Name <ImportExportIcon /> </b></p>
                    <p><b>Owner</b></p>
                    <p><b>Last Modified</b></p>
                    <p><b>File Size</b></p>
                </div>

                <div className='detailsRow'>
                    <p><InsertDriveFileIcon /> Name</p>
                    <p>Me</p>
                    <p>Yesterday</p>
                    <p>1 GB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Data